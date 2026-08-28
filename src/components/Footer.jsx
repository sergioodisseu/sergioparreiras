export default function Footer({ lang }) {
  return (
    <footer className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-3 border-t-2 border-border">
      <span className="font-pixel text-[9px] text-fg-faint">© 2026 SÉRGIO PARREIRAS</span>
      <span className="font-pixel text-[9px] text-fg-faint">
        {lang === "pt" ? "GAME OVER? PRESSIONE F5" : "GAME OVER? PRESS F5"}
      </span>
    </footer>
  );
}
