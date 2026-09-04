import { useState } from "react";
import { Field, TextAreaField } from "./ui/Field";
import emailjs from '@emailjs/browser';

const emptyForm = { name: "", email: "", message: "" };
const ACCENT = "var(--color-joystick)";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

const errorMessages = {
  pt: {
    name: "Digite seu nome.",
    email: "Digite um e-mail válido.",
    message: `A mensagem precisa ter pelo menos ${MIN_MESSAGE_LENGTH} caracteres.`,
    server: "Não foi possível enviar. Tente de novo em instantes.",
  },
  en: {
    name: "Enter your name.",
    email: "Enter a valid email.",
    message: `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`,
    server: "Couldn't send it. Please try again shortly.",
  },
};

function validate(form, lang) {
  const messages = errorMessages[lang];
  const errors = {};

  if (form.name.trim().length === 0) errors.name = messages.name;
  if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = messages.email;
  if (form.message.trim().length < MIN_MESSAGE_LENGTH) errors.message = messages.message;

  return errors;
}

export default function ContactForm({ lang }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); 

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form, lang);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      title: lang === "pt" ? "Contato via Portfólio" : "Contact via Portfolio",
    };

    try {
      await emailjs.send(
        'service_6mc17ce',      
        'template_9btcorq',      
        templateParams,
        'T-spuYv0DlyBTAmGZ'     
      );

      setStatus("sent");
      setForm(emptyForm);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("idle");
      setErrors({ server: errorMessages[lang].server });
    }
  }

  if (status === "sent") {
    return (
      <div
        className="arcade-screen rounded flex flex-col items-center justify-center h-64 gap-4"
        style={{ "--screen-color": ACCENT }}
      >
        <div className="font-pixel text-2xl" style={{ color: ACCENT }}>
          1UP
        </div>
        <p className="font-pixel text-[10px]" style={{ color: ACCENT }}>
          {lang === "pt" ? "MENSAGEM ENVIADA!" : "MESSAGE SENT!"}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
      style={{ "--focus-color": ACCENT }}
    >
      <Field
        label={lang === "pt" ? "Nome" : "Name"}
        type="text"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
        error={errors.name}
        disabled={status === "sending"}
      />
      <Field
        label="E-mail"
        type="email"
        value={form.email}
        onChange={(event) => updateField("email", event.target.value)}
        error={errors.email}
        disabled={status === "sending"}
      />
      <TextAreaField
        label={lang === "pt" ? "Mensagem" : "Message"}
        rows={5}
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        error={errors.message}
        disabled={status === "sending"}
      />

      {errors.server && <span className="text-sm text-red-400">{errors.server}</span>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-pixel text-xs px-6 py-4 w-full rounded border-2 transition-colors disabled:opacity-50"
        style={{ borderColor: ACCENT, color: ACCENT }}
      >
        {status === "sending"
          ? lang === "pt" ? "ENVIANDO..." : "SENDING..."
          : `${lang === "pt" ? "ENVIAR" : "SEND"} ▶`}
      </button>
    </form>
  );
}