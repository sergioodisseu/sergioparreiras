import { experience, certifications } from "../data/experience";
import SectionHeader from "./ui/SectionHeader";
import ExperienceItem from "./ExperienceItem";

export default function Experience({ lang }) {
  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="02"
          title={lang === "pt" ? "Experiências" : "Experience"}
          subtitle={
            lang === "pt"
              ? "Profissional · Estágio · Freelance"
              : "Professional · Internship · Freelance"
          }
        />

        <div className="mt-16">
          {experience.map((item, index) => (
            <ExperienceItem
              key={item.company}
              item={item}
              lang={lang}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-fg-faint mb-6">
            {lang === "pt" ? "Certificações" : "Certifications"}
          </h3>
          <div className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-4">
                <span className="text-accent text-[10px]">●</span>
                <span className="text-sm text-fg-muted">{cert.name}</span>
                <span className="font-mono text-xs text-fg-faint">
                  — {cert.issuer}, {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
