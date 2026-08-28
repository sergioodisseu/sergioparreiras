import { experience, certifications } from "../data/experience";
import { sprites } from "../data/sprites";
import SectionHeader from "./ui/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const ACCENT = "var(--color-coin)";

export default function Experience({ lang }) {
  return (
    <section id="experience" className="px-6 md:px-16 py-24 max-w-4xl mx-auto">
      <SectionHeader
        sprite={sprites.coin}
        color={ACCENT}
        title={lang === "pt" ? "Experiências" : "Experience"}
        subtitle={lang === "pt" ? "Profissional · Estágio · Freelance" : "Professional · Internship · Freelance"}
      />

      <div className="arcade-screen rounded px-6" style={{ "--screen-color": ACCENT }}>
        {experience.map((item, index) => (
          <ExperienceItem
            key={item.company}
            item={item}
            lang={lang}
            color={ACCENT}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-pixel text-[10px] text-fg-muted mb-5">
          {lang === "pt" ? "CERTIFICAÇÕES" : "CERTIFICATIONS"}
        </h3>
        <div className="flex flex-col gap-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-3 text-base">
              <span style={{ color: ACCENT }}>●</span>
              <span className="text-fg-muted">{cert.name}</span>
              <span className="text-fg-faint text-sm">
                — {cert.issuer}, {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
