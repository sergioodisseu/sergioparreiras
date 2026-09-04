export const projects = [
  {
    year: "2023",
    title: "safeTrade",
    description: {
      pt: "Marketplace completo com back-end em Java Spring Boot, banco de dados PostgreSQL e interface em React. Foco em segurança de transações e experiência do usuário.",
      en: "Full marketplace with Java Spring Boot back-end, PostgreSQL database and React interface. Focus on transaction security and user experience.",
    },
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "https://github.com/sergioodisseu",
    image: "docs/img/img-safetrade.png",
    liveUrl: undefined,
  },
  {
    year: "2024",
    title: "Livremente Homeopatia",
    description: {
      pt: "E-commerce completo com deploy na AWS EC2/RDS, back-end em Java Spring Boot e front-end em React. Infraestrutura em nuvem com alta disponibilidade.",
      en: "Full e-commerce deployed on AWS EC2/RDS, Java Spring Boot back-end and React front-end. High-availability cloud infrastructure.",
    },
    tech: ["Java", "Spring Boot", "PostgreSQL", "AWS EC2", "AWS RDS", "React"],
    github: "https://github.com/sergioodisseu",
    image: "docs/img/img-livrementehomeopatia.png",
    liveUrl: undefined,
  },
  {
    year: "2026",
    title: "Fatal Kombat 1v1",
    description: {
      pt: "Jogo de luta 1v1 em turnos para console, desenvolvido em C++ moderno. Arquitetado com princípios POO e SOLID, apresentando 14+ classes únicas, modo vs IA, PvP local e persistência de dados.",
      en: "Turn-based 1v1 console fighting game developed in modern C++. Architected following OOP and SOLID principles, featuring 14+ unique classes, vs AI mode, local PvP, and data persistence.",
    },
    tech: ["C++", "CMake", "Docker"],
    github: "https://github.com/sergioodisseu/fatalkombat1v1",
    image: "docs/img/img-fatalkombat1v1.png",
    liveUrl: undefined,
  },
  {
    year: "2026",
    title: "Markditor - Editor de Markdown",
    description: {
      pt: "Editor de Markdown moderno e multiplataforma construído do zero com Java e JavaFX. Inclui pré-visualização em tempo real (HTML), explorador de arquivos e renderização de alta performance.",
      en: "Modern and cross-platform Markdown editor built from scratch with Java and JavaFX. Includes real-time HTML preview, file explorer, and high-performance rendering.",
    },
    tech: ["Java", "JavaFX", "Maven"],
    github: "https://github.com/sergioodisseu/mave-markdown-editor",
    image: "docs/img/img-markditor.png",
    liveUrl: undefined,
  },
  {
    year: "TODO",
    title: "Cobrinha 3D",
    description: {
      pt: "Snake em 3D rodando na superfície de um cubo, em C++ com raylib. Movimento com wrap-around entre as 6 faces, interpolação esférica (slerp) pra manter velocidade angular constante nas viradas de quina, câmera que acompanha a cobra suavemente e dificuldade dinâmica conforme ela cresce.",
      en: "3D Snake running on the surface of a cube, in C++ with raylib. Wrap-around movement across the 6 faces, spherical interpolation (slerp) to keep constant angular speed on corner turns, a camera that smoothly follows the snake, and dynamic difficulty as it grows.",
    },
    tech: ["C++", "raylib"],
    github: "https://github.com/sergioodisseu/snake",
    image: "docs/img/img-snake.png",
    internalPath: "/projetos/cobrinha-3d",
  }
];