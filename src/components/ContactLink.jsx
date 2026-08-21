export default function ContactLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-sm w-fit text-fg-subtle transition-colors hover:text-fg"
    >
      <span className="text-accent">{icon}</span>
      {label}
    </a>
  );
}
