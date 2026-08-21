import { useEffect, useState } from "react";
import { navItems } from "../data/nav";

// Observa cada seção da página e retorna o id da que está mais
// visível no momento, para destacar o item correspondente no menu.
export function useActiveSection() {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}
