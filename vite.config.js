import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Em desenvolvimento (npm run dev), redireciona chamadas /api
    // para o servidor Express rodando na porta 3001.
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
