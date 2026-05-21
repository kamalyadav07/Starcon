import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.CONTACT_API_PORT || 5188);
const toAddress = process.env.CONTACT_TO_EMAIL || "service.desk@compton.in";

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    return res.status(500).json({
      error: `Email server is missing: ${missingEnv.join(", ")}`,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      to: toAddress,
      subject: `Website query from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ ok: true, message: "Email sent" });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(502).json({ error: "Email could not be sent." });
  }
});

app.listen(port, () => {
  console.log(`Contact API listening on http://127.0.0.1:${port}`);
});
