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
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-15 border-b border-border bg-bg/92 backdrop-blur-md">
        <button
          onClick={() => handleNavClick("about")}
          className="font-display text-lg font-bold tracking-tight text-accent"
        >
          sergio<span className="text-fg">.dev</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
                active === item.id ? "text-accent" : "text-fg-subtle"
              }`}
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
        <div className="fixed inset-0 top-15 z-40 flex flex-col items-center justify-center gap-8 bg-bg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-3xl font-bold ${
                active === item.id ? "text-accent" : "text-fg"
              }`}
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
      className="font-mono text-xs px-3 py-1 rounded-sm border border-border-soft text-fg-subtle"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
