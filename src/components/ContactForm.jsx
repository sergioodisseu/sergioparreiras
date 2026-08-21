import { useState } from "react";
import { profile } from "../data/profile";
import { Field, TextAreaField } from "./ui/Field";

const emptyForm = { name: "", email: "", message: "" };

export default function ContactForm({ lang }) {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  // Envio simples via cliente de e-mail do usuário (mailto), sem
  // precisar de back-end. Para não redirecionar o usuário, dá pra
  // trocar por um serviço gratuito como o Formspree (formspree.io),
  // mantendo o mesmo formulário.
  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(emptyForm);
    setTimeout(() => setSent(false), 5000);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4 rounded-sm border border-border">
        <div className="text-accent text-3xl">✓</div>
        <p className="font-mono text-sm text-accent">
          {lang === "pt" ? "Abrindo seu e-mail..." : "Opening your email client..."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field
        label={lang === "pt" ? "Nome" : "Name"}
        type="text"
        value={form.name}
        onChange={(event) => updateField("name", event.target.value)}
        required
      />
      <Field
        label="E-mail"
        type="email"
        value={form.email}
        onChange={(event) => updateField("email", event.target.value)}
        required
      />
      <TextAreaField
        label={lang === "pt" ? "Mensagem" : "Message"}
        rows={5}
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        required
      />
      <button
        type="submit"
        className="font-mono text-sm px-6 py-3 w-full rounded-sm bg-accent text-bg font-semibold tracking-wide transition-colors hover:bg-accent-dim"
      >
        {lang === "pt" ? "Enviar mensagem" : "Send message"} →
      </button>
    </form>
  );
}
