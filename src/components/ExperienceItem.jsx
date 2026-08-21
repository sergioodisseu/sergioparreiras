export default function ExperienceItem({ item, lang, isLast }) {
  return (
    <div className={`py-8 border-t border-border ${isLast ? "border-b" : ""}`}>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-mono text-xs tracking-wide text-fg-faint mb-1">
            {item.period}
          </div>
          <div className="font-semibold text-sm text-accent mb-1">{item.company}</div>
          <div className="font-mono text-xs text-fg-faint">{item.type[lang]}</div>
        </div>

        <div className="md:col-span-2">
          <div className="font-semibold text-base text-fg mb-3">{item.role[lang]}</div>
          <ul className="flex flex-col gap-2">
            {item.bullets[lang].map((bullet) => (
              <li key={bullet} className="text-sm leading-relaxed text-fg-muted flex gap-3">
                <span className="text-accent shrink-0 mt-0.5">›</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
