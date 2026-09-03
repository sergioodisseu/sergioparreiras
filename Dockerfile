# ---- Etapa 1: build do jogo em C++ para WebAssembly ----
# Usa a imagem oficial do Emscripten, que já traz o compilador (emcc)
# configurado. Compila o raylib para o alvo Web e depois o jogo em
# cima dele — é exatamente a receita oficial do próprio raylib
# (examples/Makefile.Web), só que rodando dentro do Docker.
FROM emscripten/emsdk:latest AS game-build
WORKDIR /game

RUN git clone --branch 5.5 --depth 1 https://github.com/raysan5/raylib.git raylib
RUN cd raylib/src && emmake make PLATFORM=PLATFORM_WEB -B

COPY game/main.cpp ./main.cpp
# em++ (não emcc) — o código é C++, não C; emcc puro não linka a
# libc++ (new/delete, std::random_device, etc.) corretamente.
#
# --shell-file usa o minshell.html (não o shell.html) — a versão
# mínima do raylib, sem a barra de botões padrão (Source Code,
# Fullscreen, Mute) que aponta pro repositório do próprio raylib e
# quebra dentro de um iframe. O jogo fica só com o canvas; os
# controles de verdade (voltar, tela cheia) ficam na página React,
# fora do iframe.
RUN em++ -o index.html main.cpp -Os -Wall \
    raylib/src/libraylib.a -I raylib/src -L raylib/src \
    -s USE_GLFW=3 -s ASYNCIFY -s TOTAL_MEMORY=134217728 \
    -s FORCE_FILESYSTEM=1 -s EXPORTED_RUNTIME_METHODS=ccall -s MINIFY_HTML=0 \
    --shell-file raylib/src/minshell.html \
    -D PLATFORM_WEB

# ---- Etapa 2: build do front-end (React + Vite) ----
FROM node:20-alpine AS frontend-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Etapa 3: servidor final (Express + front-end + jogo, juntos) ----
FROM node:20-alpine
WORKDIR /app

COPY server/package.json server/package-lock.json ./
RUN npm ci --omit=dev

COPY server/ ./
COPY --from=frontend-build /app/dist ./public
COPY --from=game-build /game/index.html /game/index.js /game/index.wasm ./public/game/

EXPOSE 3001
CMD ["node", "index.js"]