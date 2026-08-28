import { profile } from "../data/profile";
import { sprites } from "../data/sprites";
import SectionHeader from "./ui/SectionHeader";
import ContactLink from "./ContactLink";
import ContactForm from "./ContactForm";
import { EmailIcon, WhatsAppIcon, LinkedinIcon, GithubIcon } from "./icons";

const ACCENT = "var(--color-joystick)";

export default function Contact({ lang }) {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 max-w-4xl mx-auto">
      <SectionHeader
        sprite={sprites.joystick}
        color={ACCENT}
        title={lang === "pt" ? "Contato" : "Contact"}
        subtitle={
          lang === "pt" ? "Aberto a oportunidades e colaborações" : "Open to opportunities and collaborations"
        }
      />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-base leading-relaxed text-fg-muted mb-8">
            {lang === "pt"
              ? "Disponível para estágios, posições CLT em back-end e projetos freelance. Respondo em até 24h."
              : "Available for internships, full-time back-end positions, and freelance projects. I reply within 24h."}
          </p>
          <div className="flex flex-col gap-5">
            <ContactLink href={`mailto:${profile.email}`} icon={<EmailIcon />} label={profile.email} color={ACCENT} />
            <ContactLink href={profile.whatsapp} icon={<WhatsAppIcon />} label={profile.phone} color={ACCENT} />
            <ContactLink
              href={profile.linkedin}
              icon={<LinkedinIcon />}
              label="linkedin.com/in/sergioparreiras"
              color={ACCENT}
            />
            <ContactLink
              href={profile.github}
              icon={<GithubIcon />}
              label="github.com/sergioodisseu"
              color={ACCENT}
            />
          </div>
        </div>

        <ContactForm lang={lang} />
      </div>
    </section>
  );
}
