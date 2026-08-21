import { profile } from "../data/profile";
import SectionHeader from "./ui/SectionHeader";
import ContactLink from "./ContactLink";
import ContactForm from "./ContactForm";
import { EmailIcon, WhatsAppIcon, LinkedinIcon, GithubIcon } from "./icons";

export default function Contact({ lang }) {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03"
          title={lang === "pt" ? "Contato" : "Contact"}
          subtitle={
            lang === "pt"
              ? "Aberto a oportunidades e colaborações"
              : "Open to opportunities and collaborations"
          }
        />

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm leading-relaxed text-fg-muted max-w-90 mb-10">
              {lang === "pt"
                ? "Disponível para estágios, posições CLT em back-end e projetos freelance. Respondo em até 24h."
                : "Available for internships, full-time back-end positions, and freelance projects. I reply within 24h."}
            </p>
            <div className="flex flex-col gap-5">
              <ContactLink
                href={`mailto:${profile.email}`}
                icon={<EmailIcon />}
                label={profile.email}
              />
              <ContactLink
                href={profile.whatsapp}
                icon={<WhatsAppIcon />}
                label={profile.phone}
              />
              <ContactLink
                href={profile.linkedin}
                icon={<LinkedinIcon />}
                label="linkedin.com/in/sergioparreiras"
              />
              <ContactLink
                href={profile.github}
                icon={<GithubIcon />}
                label="github.com/sergioodisseu"
              />
            </div>
          </div>

          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
}
