import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero({ lang }) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-25 pb-20"
    >
      <BackgroundGrid />

      <div className="relative max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6 fade-up fade-up-1">
          {profile.tagline[lang]}
        </p>

        <h1 className="font-display font-black leading-none tracking-tight mb-2 fade-up fade-up-2 text-[clamp(3rem,9vw,7.5rem)]">
          {profile.firstName}
          <br />
          <span className="text-accent">{profile.lastName}</span>
          <span className="cursor-blink text-accent">_</span>
        </h1>

        <p className="font-mono text-xs text-fg-faint mb-12 fade-up fade-up-2">
          {profile.location} · {profile.phone}
        </p>

        <div className="grid md:grid-cols-2 gap-12 fade-up fade-up-3">
          <div>
            <FieldLabel>{lang === "pt" ? "Resumo" : "Summary"}</FieldLabel>
            <p className="text-sm leading-relaxed text-fg-muted max-w-115">
              {profile.summary[lang]}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs flex items-center gap-2 w-fit text-fg-subtle transition-colors hover:text-fg"
              >
                <LinkedinIcon /> linkedin.com/in/sergioparreiras
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs flex items-center gap-2 w-fit text-fg-subtle transition-colors hover:text-fg"
              >
                <GithubIcon /> github.com/sergioodisseu
              </a>
            </div>
          </div>

          <div>
            <FieldLabel>{lang === "pt" ? "Competências" : "Skills"}</FieldLabel>
            <div className="flex flex-col gap-3">
              {Object.entries(skillGroups).map(([category, items]) => (
                <div key={category} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-xs text-accent min-w-22">{category}</span>
                  <div className="flex flex-wrap gap-1">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2 py-0.5 rounded-sm bg-surface-2 text-fg-subtle border border-border-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <FieldLabel small>{lang === "pt" ? "Idiomas" : "Languages"}</FieldLabel>
              <div className="flex gap-6">
                {profile.languages.map((language) => (
                  <span key={language.pt} className="font-mono text-xs text-fg-subtle">
                    {language.flag} {language[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}

function FieldLabel({ children, small }) {
  return (
    <h2
      className={`font-mono text-xs uppercase tracking-[0.15em] text-fg-faint ${
        small ? "mb-3" : "mb-4"
      }`}
    >
      {children}
    </h2>
  );
}

// Grade sutil de fundo, só para dar textura à seção de abertura.
function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  );
}

function ScrollHint() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-border-soft fade-up fade-up-4">
      <span className="font-mono text-xs">scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
    </div>
  );
}
