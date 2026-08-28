export default function ExperienceItem({ item, lang, color, isLast }) {
  return (
    <div className={`py-8 border-t-2 border-border ${isLast ? "border-b-2" : ""}`}>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-pixel text-[9px] text-fg-faint mb-2">{item.period}</div>
          <div className="font-pixel text-xs mb-2" style={{ color }}>
            {item.company}
          </div>
          <div className="text-sm text-fg-faint">{item.type[lang]}</div>
        </div>

        <div className="md:col-span-2">
          <div className="font-pixel text-[11px] mb-4">{item.role[lang]}</div>
          <ul className="flex flex-col gap-2">
            {item.bullets[lang].map((bullet) => (
              <li key={bullet} className="text-base leading-relaxed text-fg-muted flex gap-3">
                <span style={{ color }} className="shrink-0">
                  ▸
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
