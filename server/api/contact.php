<?php

declare(strict_types=1);

loadEnv(firstExistingPath([
    __DIR__ . '/../.env',
    __DIR__ . '/.env',
    __DIR__ . '/../server/.env',
]));

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed.']);
}

$input = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($input)) {
    $input = $_POST;
}

$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['error' => 'Name, email, and message are required.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Please enter a valid email address.']);
}

$requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
$missingEnv = array_values(array_filter($requiredEnv, static fn ($key) => env($key) === ''));

if (count($missingEnv) > 0) {
    respond(500, ['error' => 'Email server is missing: ' . implode(', ', $missingEnv)]);
}

try {
    $encryption = strtolower(env('SMTP_ENCRYPTION', env('SMTP_SECURE') === 'true' ? 'ssl' : 'tls'));
    $fromEmail = env('CONTACT_FROM_EMAIL', env('SMTP_USER'));
    $fromName = env('CONTACT_FROM_NAME', 'Starcon Website');
    $toEmails = parseEmailList(env('CONTACT_TO_EMAIL', 'info@starconinfra.in,starcon_infra@yahoo.co.in'));
    $subject = 'Website query from ' . $name;
    $body = implode("\n", [
        'Name: ' . $name,
        'Email: ' . $email,
        'Phone: ' . ($phone !== '' ? $phone : '-'),
        '',
        'Message:',
        $message,
    ]);

    smtpSend([
        'host' => env('SMTP_HOST'),
        'port' => (int) env('SMTP_PORT', '587'),
        'encryption' => $encryption,
        'username' => env('SMTP_USER'),
        'password' => env('SMTP_PASS'),
        'fromEmail' => $fromEmail,
        'fromName' => $fromName,
        'toEmails' => $toEmails,
        'replyEmail' => $email,
        'replyName' => $name,
        'subject' => $subject,
        'body' => $body,
    ]);

    respond(200, ['ok' => true, 'message' => 'Email sent']);
} catch (Throwable $exception) {
    error_log('Contact email failed: ' . $exception->getMessage());
    respond(502, ['error' => 'Email could not be sent: ' . $exception->getMessage()]);
}

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

function env(string $key, string $default = ''): string
{
    $value = $_ENV[$key] ?? getenv($key);
    return $value === false || $value === null ? $default : (string) $value;
}

function loadEnv(string $path): void
{
    if ($path === '' || !is_file($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");

        if ($key !== '' && !array_key_exists($key, $_ENV)) {
            $_ENV[$key] = $value;
            putenv($key . '=' . $value);
        }
    }
}

function firstExistingPath(array $paths): string
{
    foreach ($paths as $path) {
        if (is_file($path)) {
            return $path;
        }
    }

    return '';
}

function smtpSend(array $message): void
{
    $host = (string) $message['host'];
    $port = (int) $message['port'];
    $encryption = (string) $message['encryption'];
    $toEmails = $message['toEmails'];
    $remote = $encryption === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @fsockopen($remote, $port, $errno, $errstr, 20);

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr . ' (' . $errno . ')');
    }

    stream_set_timeout($socket, 20);

    try {
        smtpExpect($socket, [220]);
        smtpCommand($socket, 'EHLO localhost', [250]);

        if ($encryption === 'tls') {
            smtpCommand($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('SMTP TLS negotiation failed.');
            }
            smtpCommand($socket, 'EHLO localhost', [250]);
        }

        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode((string) $message['username']), [334]);
        smtpCommand($socket, base64_encode((string) $message['password']), [235]);
        smtpCommand($socket, 'MAIL FROM:<' . (string) $message['fromEmail'] . '>', [250]);
        foreach ($toEmails as $toEmail) {
            smtpCommand($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
        }
        smtpCommand($socket, 'DATA', [354]);

        fwrite($socket, buildEmailMessage($message) . "\r\n.\r\n");
        smtpExpect($socket, [250]);
        smtpCommand($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return smtpExpect($socket, $expectedCodes);
}

function smtpExpect($socket, array $expectedCodes): string
{
    $response = '';
    $code = 0;

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (preg_match('/^(\d{3})\s/', $line, $matches) === 1) {
            $code = (int) $matches[1];
            break;
        }
    }

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }

    return $response;
}

function buildEmailMessage(array $message): string
{
    $headers = [
        'Date: ' . date(DATE_RFC2822),
        'From: ' . formatAddress((string) $message['fromEmail'], (string) $message['fromName']),
        'To: ' . implode(', ', $message['toEmails']),
        'Reply-To: ' . formatAddress((string) $message['replyEmail'], (string) $message['replyName']),
        'Subject: ' . sanitizeHeader((string) $message['subject']),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
    ];

    $body = str_replace(["\r\n", "\r"], "\n", (string) $message['body']);
    $body = preg_replace('/^\./m', '..', $body);

    return implode("\r\n", $headers) . "\r\n\r\n" . str_replace("\n", "\r\n", $body);
}

function formatAddress(string $email, string $name): string
{
    $email = sanitizeHeader($email);
    $name = sanitizeHeader($name);

    if ($name === '') {
        return $email;
    }

    return '"' . addcslashes($name, '"\\') . '" <' . $email . '>';
}

function sanitizeHeader(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

function parseEmailList(string $value): array
{
    $emails = array_values(array_filter(array_map('trim', explode(',', $value))));
    $validEmails = [];

    foreach ($emails as $email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $validEmails[] = $email;
        }
    }

    if (count($validEmails) === 0) {
        throw new RuntimeException('No valid recipient email is configured.');
    }

    return $validEmails;
}
