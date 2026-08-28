export default function ContactLink({ href, icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 text-base w-fit text-fg-muted transition-colors hover:text-fg"
    >
      <span style={{ color }}>{icon}</span>
      {label}
    </a>
  );
}
