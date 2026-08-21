import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Divider from "./components/ui/Divider";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState("pt");
  const toggleLang = () => setLang((current) => (current === "pt" ? "en" : "pt"));

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header lang={lang} onToggleLang={toggleLang} />

      <Hero lang={lang} />
      <Divider />
      <Projects lang={lang} />
      <Divider />
      <Experience lang={lang} />
      <Divider />
      <Contact lang={lang} />

      <Footer lang={lang} />
    </div>
  );
}
