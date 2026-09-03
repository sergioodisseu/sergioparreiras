import Header from "../components/Header";
import ArcadeSelect from "../components/ArcadeSelect";
import Hero from "../components/Hero";
import Divider from "../components/ui/Divider";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function PortfolioPage({ lang, onToggleLang }) {
  return (
    <>
      <Header lang={lang} onToggleLang={onToggleLang} />

      <ArcadeSelect lang={lang} />
      <Divider />
      <Hero lang={lang} />
      <Divider />
      <Projects lang={lang} />
      <Divider />
      <Experience lang={lang} />
      <Divider />
      <Contact lang={lang} />

      <Footer lang={lang} />
    </>
  );
}
