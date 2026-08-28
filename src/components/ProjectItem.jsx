import Tag from "./ui/Tag";
import { GithubIcon } from "./icons";

export default function ProjectItem({ project, lang, color }) {
  return (
    <div className="arcade-screen rounded p-6" style={{ "--screen-color": color }}>
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <div className="font-pixel text-[9px] mb-2" style={{ color }}>
            {project.year}
          </div>
          <h3 className="font-pixel text-sm mb-3">{project.title}</h3>
          <p className="text-base leading-relaxed text-fg-muted mb-4">
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
            className="text-base flex items-center gap-2 w-fit text-fg-muted transition-colors hover:text-fg"
          >
            <GithubIcon size={14} />
            {lang === "pt" ? "Ver repositório" : "View repository"} →
          </a>
        </div>

        <div className="md:col-span-3">
          <ProjectImage project={project} color={color} />
        </div>
      </div>
    </div>
  );
}

function ProjectImage({ project, color }) {
  return (
    <div
      className="overflow-hidden rounded border-2 bg-surface h-50 flex items-center justify-center"
      style={{ borderColor: color }}
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <span className="font-pixel text-[9px] text-fg-faint px-4 text-center">
          {project.title}
        </span>
      )}
    </div>
  );
}
