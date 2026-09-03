const baseClasses =
  "w-full text-base px-4 py-3 rounded border-2 bg-surface text-fg " +
  "outline-none transition-colors focus:border-[var(--focus-color,var(--color-joystick))]";

const errorClasses = "border-red-500 focus:border-red-500";
const normalClasses = "border-border";

export function Field({ label, error, ...inputProps }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-pixel text-[9px] uppercase tracking-widest text-fg-muted">
        {label}
      </label>
      <input
        className={`${baseClasses} ${error ? errorClasses : normalClasses}`}
        aria-invalid={Boolean(error)}
        {...inputProps}
      />
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}

export function TextAreaField({ label, error, ...textareaProps }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-pixel text-[9px] uppercase tracking-widest text-fg-muted">
        {label}
      </label>
      <textarea
        className={`${baseClasses} resize-none ${error ? errorClasses : normalClasses}`}
        aria-invalid={Boolean(error)}
        {...textareaProps}
      />
      {error && <span className="text-sm text-red-400">{error}</span>}
    </div>
  );
}
