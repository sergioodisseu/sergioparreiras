import { useEffect, useState } from "react";
import { arcadeSections, sprites } from "../data/sprites";
import PixelSprite from "./PixelSprite";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function ArcadeSelect({ lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % arcadeSections.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + arcadeSections.length) % arcadeSections.length);
      }
      if (event.key === "Enter") {
        scrollToSection(arcadeSections[activeIndex].id);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="select"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <h1 className="font-pixel text-xl sm:text-2xl md:text-4xl text-alien mb-4 break-words [text-shadow:0_0_6px_var(--color-alien),0_0_16px_var(--color-alien)]">
        SÉRGIO.EXE
      </h1>
      <p className="font-pixel text-xs text-coin mb-16 blink [text-shadow:0_0_6px_var(--color-coin)]">
        {lang === "pt" ? "PRESSIONE ENTER PARA COMEÇAR" : "PRESS ENTER TO START"}
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {arcadeSections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            onMouseEnter={() => setActiveIndex(index)}
            className="group relative w-40 py-6 px-3 bg-surface border-2 rounded transition-transform hover:-translate-y-1"
            style={{
              borderColor: index === activeIndex ? section.colorVar : "var(--color-border)",
              boxShadow: index === activeIndex ? `0 0 10px ${section.colorVar}` : "none",
            }}
          >
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm bob"
              style={{
                color: section.colorVar,
                opacity: index === activeIndex ? 1 : 0,
                textShadow: `0 0 6px ${section.colorVar}`,
              }}
            >
              ▼
            </span>

            <div className="flex justify-center mb-4">
              <PixelSprite sprite={sprites[section.sprite]} size={56} />
            </div>

            <div
              className="font-pixel text-[10px] tracking-wider"
              style={{
                color: index === activeIndex ? section.colorVar : "var(--color-fg-muted)",
                textShadow: index === activeIndex ? `0 0 6px ${section.colorVar}` : "none",
              }}
            >
              {lang === "pt" ? section.pt : section.en}
            </div>
          </button>
        ))}
      </div>

      <div className="font-pixel text-[10px] text-fg-faint mt-16 flex flex-wrap items-center justify-center gap-2">
        <kbd className="border border-border rounded px-2 py-1">←</kbd>
        <kbd className="border border-border rounded px-2 py-1">→</kbd>
        <span>{lang === "pt" ? "NAVEGAR" : "NAVIGATE"}</span>
        <kbd className="border border-border rounded px-2 py-1 ml-2">ENTER</kbd>
        <span>{lang === "pt" ? "SELECIONAR" : "SELECT"}</span>
      </div>
    </section>
  );
}
