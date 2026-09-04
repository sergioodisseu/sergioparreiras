# Styleguide — Portfólio Sérgio Parreiras

Guia de estilo visual do projeto: conceito, paleta, tipografia,
componentes e padrões de interação. Serve como referência pra manter
consistência ao adicionar conteúdo novo (mais um projeto, mais uma
experiência) sem quebrar a identidade visual.

## 1. Conceito

Tema de **fliperama / arcade retrô**: fundo quase preto, sprites em
pixel art desenhados à mão (não são reproduções de personagens de
nenhum jogo licenciado), tipografia pixelada e uma tela de entrada
que funciona como uma "tela de seleção de personagem" clássica —
navegável pelo teclado (setas + Enter), com um cursor piscando ao
lado da opção ativa.

Cada uma das 4 seções do site (Sobre Mim, Projetos, Experiências,
Contato) tem um **sprite e uma cor própria**, usados de forma
consistente em toda a seção — no card da tela de seleção, no ícone ao
lado do título, e na borda com brilho neon que envolve o conteúdo.

## 2. Paleta de cores

Definida como variáveis CSS em `src/index.css`, sob `@theme` (o
Tailwind v4 gera classes utilitárias automaticamente a partir delas —
ex: `--color-bg` vira `bg-bg`, `text-bg`, `border-bg`, etc.).

### Base (neutra)

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#050505` | Fundo da página inteira |
| `--color-fg` | `#ededed` | Texto principal |
| `--color-fg-muted` | `#999999` | Texto secundário (parágrafos, descrições) |
| `--color-fg-faint` | `#555555` | Texto terciário (metadados, rodapé, placeholders) |
| `--color-surface` | `#0a0a0a` | Fundo de cards, inputs, tags |
| `--color-border` | `#1e1e1e` | Divisórias entre seções, bordas neutras |

### Acentos por seção

| Token | Valor | Seção | Sprite |
|---|---|---|---|
| `--color-ghost` | `#ff4dd8` | Sobre Mim | Fantasma |
| `--color-alien` | `#00ff87` | Projetos | Alien |
| `--color-coin` | `#ffcc00` | Experiências | Moeda |
| `--color-joystick` | `#4be8ff` | Contato | Joystick |

**Regra de uso:** a cor de acento de uma seção só aparece *dentro*
dela (título, ícone, borda com brilho, links). Nunca misture a cor de
uma seção com o conteúdo de outra — é isso que deixa claro em qual
"parte do jogo" a pessoa está.

## 3. Tipografia

Duas famílias, cada uma com um papel fixo — nunca trocado entre si:

| Fonte | Uso | Exemplo |
|---|---|---|
| **Press Start 2P** (`--font-pixel`) | Títulos, rótulos, botões, tags, qualquer texto curto que precise do visual "pixelado" | `SÉRGIO.EXE`, `SOBRE MIM`, nomes de projeto |
| **VT323** (`--font-mono`) | Texto corrido — parágrafos, descrições, bullets de experiência | Resumo profissional, descrição de projetos |

Por ser uma fonte bitmap, **Press Start 2P nunca é usada em blocos de
texto longos** — só em strings curtas (uma linha, poucas palavras).
Tamanhos típicos: `text-[9px]` a `text-[11px]` para rótulos/tags,
subindo até `text-2xl`/`text-4xl` só no título da tela de seleção.

## 4. Sprites (pixel art)

Cada sprite é uma matriz de caracteres em `src/data/sprites.js`, onde
cada caractere vira um `<rect>` de 1×1 unidade dentro de um SVG:

- `"0"` → pixel vazio (transparente)
- `"1"` → cor principal do sprite
- `"2"` → cor de destaque (olho, brilho)

O componente `PixelSprite.jsx` é genérico — ele só desenha o que a
matriz descreve, então criar um sprite novo é uma questão de dados,
não de código. Exemplo (o fantasma, 10×10):

```
"0011111100"
"0111111110"
"1111111111"
"1111111111"
"1122112211"   ← olhos (cor "2")
"1122112211"
"1111111111"
"1111111111"
"1111111111"
"1010101010"   ← barra inferior "ondulada"
```

**Regra de design:** os sprites são propositalmente genéricos
(fantasma, alien, moeda, joystick) — tropos comuns de fliperama, não
personagens específicos de Pac-Man, Space Invaders ou qualquer outro
jogo com marca registrada.

## 5. Efeitos e animação

| Efeito | Onde | Como |
|---|---|---|
| Scanlines de CRT | Sobre a página inteira | `.crt-overlay`, `position: fixed`, gradiente repetido horizontal, `pointer-events: none` |
| Brilho neon | Bordas de seções e do card ativo | `.arcade-screen`, `box-shadow` com a cor de acento da seção (`--screen-color`) |
| Piscar (`blink`) | Texto "PRESSIONE ENTER", cursor da seleção | `@keyframes blink`, alterna opacidade 1↔0 a cada ~0.5s |
| Flutuar (`bob`) | Seta ▼ sobre o card ativo na tela de seleção | `@keyframes bob`, translação vertical curta e contínua |

Todas as animações respeitam `prefers-reduced-motion: reduce`
(desligam automaticamente se o usuário pediu menos movimento no
sistema operacional).

## 6. Componentes reutilizáveis (`src/components/ui/`)

| Componente | Função |
|---|---|
| `SectionHeader` | Sprite + título + subtítulo, no topo de cada seção |
| `Tag` | Pílula pequena pra tecnologias (`React`, `Docker`, etc.) |
| `Field` / `TextAreaField` | Campo de formulário com rótulo pixelado e estado de erro |
| `Divider` | Linha fina entre seções |

Todos recebem a cor de acento da seção via prop (`color`), nunca
hardcoded — isso é o que permite a mesma peça (ex: `Tag`) aparecer em
rosa em "Sobre Mim" e em verde em "Projetos" sem duplicar código.

## 7. Layout e responsividade

- Grid principal dos cards de projeto: `md:grid-cols-5` (2 colunas
  pro texto, 3 pra imagem) — colapsa pra uma coluna só abaixo do
  breakpoint `md`.
- Menu do cabeçalho: linha horizontal acima de `md`; abaixo disso,
  vira overlay em tela cheia (ver `Header.jsx`).
- Tela do jogo (`SnakeGamePage`): sempre `aspect-square`, porque a
  resolução interna do jogo é fixa (1000×1000) — qualquer proporção
  diferente causaria distorção ou corte.

## 8. Acessibilidade

- Toda animação tem alternativa estática via `prefers-reduced-motion`.
- A tela de seleção é 100% navegável por teclado (setas + Enter),
  sem depender do mouse.
- Contraste: texto principal (`--color-fg`, `#ededed`) sobre fundo
  (`--color-bg`, `#050505`) passa AA/AAA com folga; texto terciário
  (`--color-fg-faint`, `#555555`) é usado só em metadados não
  essenciais, nunca em conteúdo que precise ser lido por todos.