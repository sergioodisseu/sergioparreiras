import { projects } from "../data/projects";
import { sprites } from "../data/sprites";
import SectionHeader from "./ui/SectionHeader";
import ProjectItem from "./ProjectItem";

const ACCENT = "var(--color-alien)";

export default function Projects({ lang }) {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 max-w-4xl mx-auto">
      <SectionHeader
        sprite={sprites.alien}
        color={ACCENT}
        title={lang === "pt" ? "Projetos" : "Projects"}
        subtitle={lang === "pt" ? "Do mais antigo ao mais recente" : "Oldest to most recent"}
      />

      {}
      <div className="relative pl-8">
        <div
          className="absolute left-0 top-2 bottom-2 w-0.5"
          style={{ background: `linear-gradient(to bottom, ${ACCENT}, transparent)` }}
        />

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div key={project.title} className="relative">
              <span
                className="absolute -left-9.5 top-2 w-2.5 h-2.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
              />
              <ProjectItem project={project} lang={lang} color={ACCENT} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
