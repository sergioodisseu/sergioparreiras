import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { GithubIcon } from "../components/icons";

const ACCENT = "var(--color-alien)";
const gameProject = projects.find((project) => project.internalPath);

/**
 * O jogo em si é gerado pelo estágio "game-build" do Dockerfile, a partir de game/main.cpp,
 * e servido em /game/ pelo mesmo servidor Express que serve o resto do site. ROdando fora do
 * DOcker, essa parta nao existe - o iframe fica em branco até rodar o docker compose up --build
 * pelo menos uma vez. 
 */
export default function SnakeGamePage({ lang }) {
  const iframeRef = useRef(null);

  function handleFullscreen() {
    iframeRef.current?.requestFullscreen?.();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 md:px-16 h-14 flex items-center border-b-2 border-border">
        <Link
          to="/"
          className="font-pixel text-[10px] text-fg-muted transition-colors hover:text-fg"
        >
          ← {lang === "pt" ? "VOLTAR AO PORTFÓLIO" : "BACK TO PORTFOLIO"}
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="font-pixel text-lg md:text-2xl mb-3"
          style={{ color: ACCENT, textShadow: `0 0 6px ${ACCENT}` }}
        >
          COBRINHA 3D
        </h1>
        <p className="text-base text-fg-muted max-w-md mb-3">
          {lang === "pt"
            ? "Snake em 3D na superfície de um cubo, escrito em C++ com raylib, compilado para WebAssembly."
            : "3D Snake on the surface of a cube, written in C++ with raylib, compiled to WebAssembly."}
        </p>
        <p className="font-pixel text-[9px] text-fg-faint mb-6">
          W A S D {lang === "pt" ? "MOVER" : "MOVE"} · R {lang === "pt" ? "REINICIAR" : "RESTART"}
        </p>

        <div className="w-full max-w-3xl flex justify-end gap-3 mb-2">
          <button
            onClick={handleFullscreen}
            className="font-pixel text-[9px] px-3 py-2 rounded border-2 transition-colors"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            {lang === "pt" ? "TELA CHEIA" : "FULLSCREEN"}
          </button>
          {gameProject && (
            <a
              href={gameProject.github}
              target="_blank"
              rel="noreferrer"
              className="font-pixel text-[9px] px-3 py-2 rounded border-2 flex items-center gap-2 transition-colors"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              <GithubIcon size={12} />
              {lang === "pt" ? "CÓDIGO-FONTE" : "SOURCE CODE"}
            </a>
          )}
        </div>

        <div
          className="arcade-screen rounded w-full max-w-3xl aspect-square md:aspect-video overflow-hidden bg-black"
          style={{ "--screen-color": ACCENT }}
        >
          <iframe
            ref={iframeRef}
            src="/game/index.html"
            title="Cobrinha 3D"
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        <p className="text-sm text-fg-faint max-w-md mt-4">
          {lang === "pt"
            ? "Se o teclado parar de responder, clique dentro da tela do jogo para garantir o foco antes de jogar."
            : "If the keyboard stops responding, click inside the game screen to make sure it has focus before playing."}
        </p>
      </main>
    </div>
  );
}