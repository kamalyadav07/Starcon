# Starcon React Client

React + Vite app for Starcon Infra.

## Commands

```bash
cd client
npm install
npm run dev
npm run build
npm run lint
```

## Structure

```text
starcon-react/client/
  public/          Static files served by Vite
  src/             React source files
  index.html       App HTML entry
  vite.config.js   Vite and Tailwind setup
```

The contact form posts to `VITE_CONTACT_API_URL` when it is set, otherwise it uses `/api/contact`.
