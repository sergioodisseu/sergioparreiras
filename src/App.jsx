import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import SnakeGamePage from "./pages/SnakeGamePage";

export default function App() {
  const [lang, setLang] = useState("pt");
  const toggleLang = () => setLang((current) => (current === "pt" ? "en" : "pt"));

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="crt-overlay" />
      <Routes>
        <Route path="/" element={<PortfolioPage lang={lang} onToggleLang={toggleLang} />} />
        <Route path="/projetos/cobrinha-3d" element={<SnakeGamePage lang={lang} />} />
      </Routes>
    </div>
  );
}
