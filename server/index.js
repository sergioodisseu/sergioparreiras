import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !EMAIL_PATTERN.test(email ?? "") || !message || message.length < 10) {
    return res.status(400).json({ error: "Dados inválidos." });
  }

  try {
    await transporter.sendMail({
      from: `"Portfólio — ${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Contato via portfólio — ${name}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error("Falha ao enviar e-mail:", error);
    res.status(500).json({ error: "Não foi possível enviar o e-mail." });
  }
});

const PORT = process.env.PORT || 3001;

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
