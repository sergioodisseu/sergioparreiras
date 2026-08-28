export default function PixelSprite({ sprite, size = 64, className = "" }) {
  const [cols, rows] = sprite.viewBox;
  const cellHeight = size * (rows / cols);

  return (
    <svg
      className={`pixel ${className}`}
      width={size}
      height={cellHeight}
      viewBox={`0 0 ${cols} ${rows}`}
    >
      {sprite.grid.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "0" ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={sprite.colors[cell]}
            />
          )
        )
      )}
    </svg>
  );
}
