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
    liveUrl: undefined,
  },
  {
    year: "2024",
    title: "Deploy Automatizado Azure CI/CD",
    description: {
      pt: "Pipeline completo de build, teste e deploy automático no Azure com GitHub Actions e Docker. Zero-downtime deployment com rollback automático.",
      en: "Complete build, test and automatic deploy pipeline on Azure with GitHub Actions and Docker. Zero-downtime deployment with automatic rollback.",
    },
    tech: ["Spring Boot", "GitHub Actions", "Docker", "Azure"],
    github: "https://github.com/sergioodisseu",
    liveUrl: undefined,
  },
  {
    year: "2025",
    title: "SaaS API de Processamento de Documentos",
    description: {
      pt: "API modular em produção com NestJS e TypeScript, infraestrutura bare-metal própria, banco PostgreSQL com Prisma ORM e containerização com Docker.",
      en: "Modular production API with NestJS and TypeScript, own bare-metal infrastructure, PostgreSQL with Prisma ORM and Docker containerization.",
    },
    tech: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Linux"],
    github: "https://github.com/sergioodisseu",
    liveUrl: undefined,
  },
  {
    year: "2025",
    title: "Server Health Dashboard",
    description: {
      pt: "Dashboard de monitoramento de servidores em tempo real via WebSockets. Stack moderna com Bun, NestJS, Next.js, SQLite e Prisma, tudo containerizado.",
      en: "Real-time server monitoring dashboard via WebSockets. Modern stack with Bun, NestJS, Next.js, SQLite and Prisma, fully containerized.",
    },
    tech: ["Bun", "NestJS", "Next.js", "SQLite", "Prisma", "Docker"],
    github: "https://github.com/sergioodisseu",
    liveUrl: undefined,
  },
  {
    // TODO: ajuste o ano pra quando o projeto foi feito de verdade —
    // deixei no fim da lista até você definir isso.
    year: "TODO",
    title: "Cobrinha 3D",
    description: {
      pt: "Snake em 3D rodando na superfície de um cubo, em C++ com raylib. Movimento com wrap-around entre as 6 faces, interpolação esférica (slerp) pra manter velocidade angular constante nas viradas de quina, câmera que acompanha a cobra suavemente e dificuldade dinâmica conforme ela cresce.",
      en: "3D Snake running on the surface of a cube, in C++ with raylib. Wrap-around movement across the 6 faces, spherical interpolation (slerp) to keep constant angular speed on corner turns, a camera that smoothly follows the snake, and dynamic difficulty as it grows.",
    },
    tech: ["C++", "raylib"],
    github: "https://github.com/sergioodisseu/snake",
    internalPath: "/projetos/cobrinha-3d",
  },
];