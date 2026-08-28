import { useState } from "react";
import { navItems } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { MenuIcon } from "./icons";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header({ lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  function handleNavClick(id) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 h-14 border-b-2 border-border bg-bg/95">
        <button
          onClick={() => scrollToSection("select")}
          className="font-pixel text-[11px] text-alien [text-shadow:0_0_6px_var(--color-alien)]"
        >
          SÉRGIO.EXE
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-pixel text-[10px] tracking-wide transition-colors"
              style={{
                color: active === item.id ? item.colorVar : "var(--color-fg-muted)",
                textShadow: active === item.id ? `0 0 6px ${item.colorVar}` : "none",
              }}
            >
              {lang === "pt" ? item.pt : item.en}
            </button>
          ))}
          <LangToggle lang={lang} onToggle={onToggleLang} />
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <LangToggle lang={lang} onToggle={onToggleLang} />
          <button onClick={() => setMenuOpen((open) => !open)} className="text-fg">
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-14 z-30 flex flex-col items-center justify-center gap-10 bg-bg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-pixel text-lg"
              style={{ color: item.colorVar, textShadow: `0 0 6px ${item.colorVar}` }}
            >
              {lang === "pt" ? item.pt : item.en}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function LangToggle({ lang, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="font-pixel text-[10px] px-2 py-1 rounded border-2 border-border text-fg-muted"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
