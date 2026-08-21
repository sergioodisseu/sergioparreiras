const fieldClasses =
  "w-full text-sm px-4 py-3 rounded-sm bg-surface border border-border-soft text-fg " +
  "outline-none transition-colors focus:border-accent";

export function Field({ label, ...inputProps }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-xs uppercase tracking-widest text-fg-faint">
        {label}
      </label>
      <input className={fieldClasses} {...inputProps} />
    </div>
  );
}

export function TextAreaField({ label, ...textareaProps }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-xs uppercase tracking-widest text-fg-faint">
        {label}
      </label>
      <textarea className={`${fieldClasses} resize-none`} {...textareaProps} />
    </div>
  );
}
