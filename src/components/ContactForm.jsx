import { useState } from "react";
import { profile } from "../data/profile";
import { Field, TextAreaField } from "./ui/Field";

const emptyForm = { name: "", email: "", message: "" };
const ACCENT = "var(--color-joystick)";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

const errorMessages = {
  pt: {
    name: "Digite seu nome.",
    email: "Digite um e-mail válido.",
    message: `A mensagem precisa ter pelo menos ${MIN_MESSAGE_LENGTH} caracteres.`,
  },
  en: {
    name: "Enter your name.",
    email: "Enter a valid email.",
    message: `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`,
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
  const [sent, setSent] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form, lang);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(emptyForm);
    setErrors({});
    setTimeout(() => setSent(false), 5000);
  }

  if (sent) {
    return (
      <div
        className="arcade-screen rounded flex flex-col items-center justify-center h-64 gap-4"
        style={{ "--screen-color": ACCENT }}
      >
        <div className="font-pixel text-2xl" style={{ color: ACCENT }}>
          1UP
        </div>
        <p className="font-pixel text-[10px]" style={{ color: ACCENT }}>
          {lang === "pt" ? "ABRINDO SEU E-MAIL..." : "OPENING YOUR EMAIL..."}
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
      />
      <Field
        label="E-mail"
        type="email"
        value={form.email}
        onChange={(event) => updateField("email", event.target.value)}
        error={errors.email}
      />
      <TextAreaField
        label={lang === "pt" ? "Mensagem" : "Message"}
        rows={5}
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        error={errors.message}
      />
      <button
        type="submit"
        className="font-pixel text-xs px-6 py-4 w-full rounded border-2 transition-colors"
        style={{ borderColor: ACCENT, color: ACCENT }}
      >
        {lang === "pt" ? "ENVIAR" : "SEND"} ▶
      </button>
    </form>
  );
}
