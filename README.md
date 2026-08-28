<div align="center">

# Portfólio Profissional — Sérgio Parreiras

<img src="docs/img/Trash Delete GIF by PERFECTL00P.gif" alt="Studio" width="700" height="700" />

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

**Instituição:** Pontifícia Universidade Católica de Minas Gerais (PUC Minas)
**Curso:** Engenharia de Software · **Disciplina:** Projeto de Software
**Professora:** Milena Menezes Adão · **Atividade:** Laboratório 1 — 2º Semestre/2026
**Aluno:** Sérgio Parreiras

**Repositório:** `TODO`
**Site publicado:** `TODO`

---

## Sobre o projeto

Portfólio pessoal em página única (scroll entre seções), construído
para apresentar minha atuação como desenvolvedor back-end. O menu
acompanha a seção visível na tela e todo o conteúdo tem versão em
português e inglês.

- **Sobre Mim** — resumo profissional, competências agrupadas por
  categoria (SQL, Linguagens, Back-end, Front-end, Cloud & DevOps,
  Metodologia) e idiomas.
- **Projetos** — linha do tempo com 5 projetos (2023–2025), como o
  *safeTrade* e a *Livremente Homeopatia*, cada um com descrição,
  stack utilizada e link do repositório.
- **Experiências** — FlowInsight (atual), PCX Tecnologia da Informação
  (estágio) e trabalhos freelance via 99Freelas, além de
  certificações (Red Hat, Cisco).
- **Contato** — links diretos para e-mail, WhatsApp e LinkedIn, e um
  formulário que dispara o envio por e-mail (`mailto:`).

## Tecnologias

| Tecnologia | Uso neste projeto |
|---|---|
| **React 19** | Componentização da interface |
| **Vite** | Servidor de desenvolvimento e build |
| **Tailwind CSS v4** | Estilização via utilitários, sobre tokens de cor próprios |
| **JavaScript (JSX)** | Linguagem do front-end — sem TypeScript nesta versão |
| **Figma** | Wireframes de média fidelidade |
| **Vercel** | Hospedagem prevista para o deploy final |

## Design

Tema escuro com uma única cor de acento (`#00ff87`), sem elementos
decorativos além do necessário. Três famílias tipográficas, cada uma
com um papel fixo: **Fraunces** (serifada) nos títulos, **Instrument
Sans** no texto corrido e **JetBrains Mono** em rótulos, tags e
metadados — reforçando a estética de terminal/editor de código.

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#080808` | Fundo |
| `--color-fg` | `#ededed` | Texto principal |
| `--color-accent` | `#00ff87` | Destaques, links ativos, botão |
| `--color-surface` / `-2` | `#0e0e0e` / `#111111` | Cards, inputs, tags |
| `--color-border` / `-soft` | `#1a1a1a` / `#222222` | Divisórias |

## Arquitetura do código

O projeto separa **conteúdo** (`data/`) de **apresentação**
(`components/`), e cada seção da página é um componente próprio,
quebrado em partes menores quando necessário:

```
portfolio-sergio/
├── docs/
│   └── img/
│       ├── studio.gif
│       └── wireframePortfolio.png
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # ponto de entrada
    ├── App.jsx                 # ordem das seções na página
    ├── index.css                # tokens de cor, fontes, animações
    │
    ├── data/                    # conteúdo do site, sem lógica visual
    │   ├── nav.js                 # itens do menu
    │   ├── profile.js             # nome, resumo, contatos, idiomas
    │   ├── skills.js               # competências por categoria
    │   ├── projects.js             # projetos da timeline
    │   └── experience.js           # experiências e certificações
    │
    ├── hooks/
    │   └── useActiveSection.js    # detecta a seção visível para o menu
    │
    └── components/
        ├── Header.jsx              # menu fixo + versão mobile + PT/EN
        ├── Hero.jsx                 # seção "Sobre Mim"
        ├── Projects.jsx             # seção "Projetos"
        ├── ProjectItem.jsx          # item da timeline
        ├── Experience.jsx           # seção "Experiências"
        ├── ExperienceItem.jsx       # item de experiência
        ├── Contact.jsx              # seção "Contato"
        ├── ContactForm.jsx          # formulário (envio por e-mail)
        ├── ContactLink.jsx          # link de contato com ícone
        ├── Footer.jsx
        ├── icons/index.jsx          # ícones SVG usados no site
        └── ui/                      # peças reutilizáveis (Tag, Field, ...)
```

## Instalação e execução local

```bash
npm install
npm run dev       # http://localhost:5173

npm run build      # gera dist/
npm run preview    # serve a build localmente
```

## Wireframes

![Wireframe do portfólio](docs/img/wireframe.png)