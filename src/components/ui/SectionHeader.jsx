import PixelSprite from "../PixelSprite";

export default function SectionHeader({ sprite, color, title, subtitle }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <PixelSprite sprite={sprite} size={44} />
      <div>
        <h2
          className="font-pixel text-lg md:text-2xl"
          style={{ color, textShadow: `0 0 6px ${color}` }}
        >
          {title}
        </h2>
        <p className="text-sm text-fg-muted mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
