# Sindhu Sharma — Portfolio

React + React Router + Vite, plain CSS theme, with a small Express backend for the contact form.

## Run it

```bash
npm install
cp .env.example .env     # then fill in the values (backend only)
npm run dev:all          # frontend on :5173, contact API on :5174
```

Production: `npm run build`, then `npm run server` (serves `dist/` and `/api/contact`).

## Updating content

Edit **`src/data/siteData.js`** only. Everything marked `[PLACEHOLDER]` is waiting for real content.

- Profile photo: `personal.profileImage` (used on Home and About)
- New event: add an object to `events.international` / `national` / `schoolCommunity` / `grassrootLocal`. It appears on its category page and gets a detail route automatically.
- New experience: add an object to `experiences`.
- Images: put files in `public/images/...` and reference them as `/images/...`. Missing images show a neutral placeholder.

## Theme

Colours and the 85% content width are tokens at the top of `src/index.css`:
`--cream #F7E7CE`, `--green #588157`, `--ink #1D201F`, white, `--container: 85%`.

## Contact form

React form → `POST /api/contact` → Nodemailer (Gmail SMTP) → Sindhu's inbox.
Credentials are server-side env vars only (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO`). Use a Google App Password, never the account password. The API validates input, has a honeypot field, and is rate-limited to 5 messages per IP per 15 minutes.
