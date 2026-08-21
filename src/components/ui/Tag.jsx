export default function Tag({ children }) {
  return (
    <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-surface-2 text-fg-subtle border border-border-soft">
      {children}
    </span>
  );
}
