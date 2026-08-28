export default function Tag({ children, color }) {
  return (
    <span
      className="font-pixel text-[9px] px-2 py-1 rounded border-2"
      style={{ borderColor: color || "var(--color-border)", color: color || "var(--color-fg-muted)" }}
    >
      {children}
    </span>
  );
}
