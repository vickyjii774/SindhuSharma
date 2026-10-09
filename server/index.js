/**
 * Secure contact API.
 *
 * React form  ->  POST /api/contact  ->  Nodemailer (Gmail SMTP)  ->  Sindhu's inbox
 *
 * All credentials live in server-side environment variables (see .env.example).
 * Nothing here is ever bundled into the frontend.
 */
import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5174;

const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO, CORS_ORIGIN } = process.env;

app.set("trust proxy", 1);
app.use(express.json({ limit: "20kb" }));
app.use(
  cors({
    origin: (CORS_ORIGIN || "http://localhost:5173").split(",").map((s) => s.trim()),
    methods: ["POST"],
  })
);

// Max 5 submissions per IP per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many messages. Please try again later." },
});

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      })
    : null;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v, max) => String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

app.post("/api/contact", limiter, async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  // Honeypot: real visitors never fill this. Pretend success so bots move on.
  if (website) return res.json({ ok: true });

  const data = {
    name: clean(name, 100),
    email: clean(email, 200),
    subject: clean(subject, 150),
    message: String(message ?? "").trim().slice(0, 5000),
  };

  if (!data.name || !EMAIL_RE.test(data.email) || !data.subject || data.message.length < 10) {
    return res.status(400).json({ ok: false, error: "Invalid input." });
  }

  if (!transporter || !CONTACT_TO) {
    console.error("Mail is not configured. Set GMAIL_USER, GMAIL_APP_PASSWORD and CONTACT_TO.");
    return res.status(500).json({ ok: false, error: "Server not configured." });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
      subject: `[Portfolio] ${data.subject}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(data.name)} &lt;${escapeHtml(data.email)}&gt;</p>
             <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
             <hr/><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Send failed:", err.message);
    res.status(500).json({ ok: false, error: "Could not send message." });
  }
});

// In production, serve the built React app from the same server
const dist = path.join(__dirname, "..", "dist");
app.use(express.static(dist));
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(dist, "index.html"), (err) => err && next());
});

app.listen(PORT, () => console.log(`Contact API listening on http://localhost:${PORT}`));
