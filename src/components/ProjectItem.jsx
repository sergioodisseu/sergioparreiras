import Tag from "./ui/Tag";
import { GithubIcon } from "./icons";

export default function ProjectItem({ project, lang }) {
  return (
    <div className="relative">
      <span className="absolute -left-8 top-1.5 w-2.25 h-2.25 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="font-mono text-xs tracking-wide text-accent mb-2">
            {project.year}
          </div>
          <h3 className="font-display font-bold text-2xl tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-fg-muted mb-4">
            {project.description[lang]}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs flex items-center gap-2 w-fit text-fg-subtle transition-colors hover:text-fg"
          >
            <GithubIcon size={14} />
            {lang === "pt" ? "Ver repositório" : "View repository"} →
          </a>
        </div>

        <div className="md:col-span-3">
          <ProjectImage project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectImage({ project }) {
  return (
    <div className="overflow-hidden rounded-sm border border-border bg-surface h-55 flex items-center justify-center">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      ) : (
        <span className="font-mono text-xs text-fg-faint px-4 text-center">
          {project.title}
        </span>
      )}
    </div>
  );
}
