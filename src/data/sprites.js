export const sprites = {
  ghost: {
    viewBox: [10, 10],
    colors: { 1: "var(--color-ghost)", 2: "#1a0a14" },
    grid: [
      "0011111100",
      "0111111110",
      "1111111111",
      "1111111111",
      "1122112211",
      "1122112211",
      "1111111111",
      "1111111111",
      "1111111111",
      "1010101010",
    ],
  },
  alien: {
    viewBox: [9, 8],
    colors: { 1: "var(--color-alien)" },
    grid: [
      "010000010",
      "001000100",
      "001111100",
      "011111110",
      "111111111",
      "101111101",
      "101000101",
      "010000010",
    ],
  },
  coin: {
    viewBox: [8, 8],
    colors: { 1: "var(--color-coin)", 2: "#fff5b0" },
    grid: [
      "00111100",
      "01111110",
      "11211111",
      "11111111",
      "11111111",
      "11111111",
      "01111110",
      "00111100",
    ],
  },
  joystick: {
    viewBox: [8, 9],
    colors: { 1: "var(--color-joystick)" },
    grid: [
      "00011000",
      "00111100",
      "00111100",
      "00011000",
      "00011000",
      "00011000",
      "01111110",
      "01111110",
      "11111111",
    ],
  },
};

export const arcadeSections = [
  { id: "about", sprite: "ghost", colorVar: "var(--color-ghost)", pt: "Sobre Mim", en: "About" },
  { id: "projects", sprite: "alien", colorVar: "var(--color-alien)", pt: "Projetos", en: "Projects" },
  { id: "experience", sprite: "coin", colorVar: "var(--color-coin)", pt: "Experiências", en: "Experience" },
  { id: "contact", sprite: "joystick", colorVar: "var(--color-joystick)", pt: "Contato", en: "Contact" },
];
