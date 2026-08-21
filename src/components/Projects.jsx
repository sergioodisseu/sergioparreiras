import { projects } from "../data/projects";
import SectionHeader from "./ui/SectionHeader";
import ProjectItem from "./ProjectItem";

export default function Projects({ lang }) {
  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="01"
          title={lang === "pt" ? "Projetos" : "Projects"}
          subtitle={
            lang === "pt"
              ? "Linha do tempo — do mais antigo ao mais recente"
              : "Timeline — oldest to most recent"
          }
        />

        <div className="mt-16 relative pl-8">
          <div className="timeline-line" />
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <ProjectItem key={project.title} project={project} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
