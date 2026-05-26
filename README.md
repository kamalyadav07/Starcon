# Starcon

Starcon Infra website split into a Vite React client and a PHP backend.

## Structure

```text
starcon-react/
  client/   React + Vite frontend
  server/   PHP backend endpoints
```

## Client

```bash
cd client
npm install
npm run dev
npm run build
```

During development, Vite proxies `/api` to `http://127.0.0.1:5188`.

## Server

```bash
cd server
composer install
php -S 127.0.0.1:5188 router.php
```

Copy `server/.env.example` to `server/.env` and fill in the SMTP settings before sending mail.
