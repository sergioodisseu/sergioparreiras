export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="flex items-end gap-6">
      <span className="font-mono text-ghost leading-none text-[clamp(3rem,8vw,5rem)]">
        {number}
      </span>
      <div>
        <h2 className="font-display font-bold leading-tight tracking-tight text-[clamp(1.8rem,4vw,3rem)]">
          {title}
        </h2>
        <p className="font-mono text-xs text-fg-faint mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
