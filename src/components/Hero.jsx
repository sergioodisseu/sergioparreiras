import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { sprites } from "../data/sprites";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

const ACCENT = "var(--color-ghost)";

export default function Hero({ lang }) {
  return (
    <section id="about" className="px-6 md:px-16 py-24 max-w-4xl mx-auto">
      <SectionHeader
        sprite={sprites.ghost}
        color={ACCENT}
        title={lang === "pt" ? "Sobre Mim" : "About Me"}
        subtitle={profile.location + " · " + profile.phone}
      />

      <div className="arcade-screen rounded p-6 md:p-10" style={{ "--screen-color": ACCENT }}>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-pixel text-[10px] text-fg-muted mb-4">
              {lang === "pt" ? "RESUMO" : "SUMMARY"}
            </h3>
            <p className="text-lg leading-relaxed text-fg-muted">{profile.summary[lang]}</p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-base flex items-center gap-2 w-fit text-fg-muted transition-colors hover:text-fg"
              >
                <LinkedinIcon /> linkedin.com/in/sergioparreiras
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-base flex items-center gap-2 w-fit text-fg-muted transition-colors hover:text-fg"
              >
                <GithubIcon /> github.com/sergioodisseu
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-pixel text-[10px] text-fg-muted mb-4">
              {lang === "pt" ? "COMPETÊNCIAS" : "SKILLS"}
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(skillGroups).map(([category, items]) => (
                <div key={category} className="flex flex-wrap items-baseline gap-x-2 gap-y-2">
                  <span className="font-pixel text-[9px]" style={{ color: ACCENT }}>
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-pixel text-[10px] text-fg-muted mb-3">
                {lang === "pt" ? "IDIOMAS" : "LANGUAGES"}
              </h3>
              <div className="flex gap-6">
                {profile.languages.map((language) => (
                  <span key={language.pt} className="text-base text-fg-muted">
                    {language.flag} {language[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
