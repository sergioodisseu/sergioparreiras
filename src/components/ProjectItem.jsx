import { Link } from "react-router-dom";
import Tag from "./ui/Tag";
import { GithubIcon } from "./icons";


function ProjectTitle({ project }) {
  const className = "font-pixel text-sm mb-3 inline-block transition-colors hover:text-fg";

  if (project.internalPath) {
    return (
      <Link to={project.internalPath} className={className}>
        {project.title} ▶
      </Link>
    );
  }

  if (project.liveUrl) {
    return (
      <a href={project.liveUrl} target="_blank" rel="noreferrer" className={className}>
        {project.title} ↗
      </a>
    );
  }

  return <h3 className="font-pixel text-sm mb-3">{project.title}</h3>;
}

export default function ProjectItem({ project, lang, color }) {
  return (
    <div className="arcade-screen rounded p-6" style={{ "--screen-color": color }}>
      <div className="font-pixel text-[9px] mb-2" style={{ color }}>
        {project.year}
      </div>

      <ProjectTitle project={project} />

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
  );
}
