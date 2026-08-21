export default function Footer({ lang }) {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border">
      <span className="font-mono text-xs text-border-soft">© 2026 Sérgio Parreiras</span>
      <span className="font-mono text-xs text-border-soft">
        {lang === "pt"
          ? "Construído com React + Vite + Tailwind CSS"
          : "Built with React + Vite + Tailwind CSS"}
      </span>
    </footer>
  );
}
