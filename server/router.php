<?php

declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);

if ($path === '/api/contact' || $path === '/api/contact.php') {
    require __DIR__ . '/api/contact.php';
    return true;
}

$file = __DIR__ . $path;
if ($path !== false && is_file($file)) {
    return false;
}

http_response_code(404);
header('Content-Type: application/json');
echo json_encode(['error' => 'Not found.']);
