# Portfólio Profissional — Sérgio Parreiras

**Instituição:** Pontifícia Universidade Católica de Minas Gerais (PUC Minas)
**Curso:** Engenharia de Software
**Disciplina:** Projeto de Software
**Professora:** Milena Menezes Adão
**Atividade:** Laboratório 1 — Segundo Semestre/2026
**Aluno:** Sérgio Parreiras

**Repositório:** `TODO — link do repositório GitHub`
**Site publicado:** `TODO — link após o deploy (Lab01S03)`

---

## 1. Sobre o projeto

Este repositório contém o desenvolvimento do **Laboratório 1** da
disciplina de Projeto de Software: um website de portfólio
profissional pessoal, com o objetivo de apresentar minha trajetória,
habilidades técnicas, projetos desenvolvidos e formas de contato de
maneira moderna e acessível.

O sistema é organizado em quatro seções, navegáveis por um menu fixo:

1. **Sobre Mim** — apresentação em português e inglês, com formação,
   área de atuação e principais competências técnicas.
2. **Projetos** — linha do tempo dos projetos desenvolvidos, do mais
   antigo ao mais recente, com descrição, tecnologias utilizadas e
   link para o repositório no GitHub.
3. **Experiências** — histórico profissional (estágio, freelance e
   emprego atual), com empresa, cargo, período e principais atividades.
4. **Contato** — ícones clicáveis para e-mail, WhatsApp e LinkedIn, e
   um formulário de contato com envio por e-mail.

## 2. Tecnologias previstas

| Camada | Tecnologia | Finalidade |
|---|---|---|
| Front-end | [React 19](https://react.dev/) | Biblioteca para construção da interface |
| Build / Dev server | [Vite](https://vite.dev/) | Ambiente de desenvolvimento e empacotamento |
| Estilização | [Tailwind CSS v4](https://tailwindcss.com/) | Sistema de utilitários CSS |
| Linguagem | JavaScript (JSX) | — |
| Prototipação | Figma | Wireframes de média fidelidade |
| Hospedagem (planejada) | Vercel / Render | Publicação gratuita em nuvem |

Não serão utilizadas bibliotecas de componentes prontos (como Material
UI ou Mantine): os elementos visuais (cards, formulário, timeline)
serão construídos manualmente com Tailwind, sobre um conjunto próprio
de tokens de design.

## 3. Design e padrão de desenvolvimento

**Conceito visual:** tema escuro, inspirado em terminal/editor de
código, com um único acento de cor (verde `#00ff87`) usado com
moderação. Tipografia combinando uma serifada (títulos), uma
sans-serif (texto corrido) e uma monoespaçada (rótulos, código,
metadados).

**Padrão de arquitetura do código:** componentização por
responsabilidade, com separação entre dados e apresentação:

- `src/data/` — conteúdo do site (perfil, projetos, experiências,
  competências), independente da camada visual;
- `src/components/` — um componente por seção da página, quebrado em
  subcomponentes menores quando necessário (ex.: `Projects` →
  `ProjectItem`);
- `src/components/ui/` — peças reutilizáveis (rótulo de seção, tag,
  campo de formulário, divisória);
- `src/hooks/` — lógica reaproveitável (`useActiveSection`, que
  detecta qual seção está visível para destacar no menu).

Essa separação segue o princípio de **responsabilidade única**: cada
arquivo tem um motivo claro para existir e para mudar.

## 4. Wireframes (Figma — média fidelidade)

Protótipo de média fidelidade cobrindo a página única do site
(scroll entre seções): navbar fixa, Hero/Sobre Mim, Projetos
(timeline vertical), Experiências e Contato, além do rodapé.

![Wireframe do portfólio — navbar, hero, projetos, experiências e contato](docs/wireframes/wireframe-portfolio.png)

Link do arquivo no Figma: `TODO`

## 5. Estrutura inicial do site

```
portfolio-sergio/
├── index.html
├── package.json
├── vite.config.js
├── docs/
│   └── wireframes/
│       └── wireframe-portfolio.png
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # ponto de entrada da aplicação
    ├── App.jsx                 # monta as seções na ordem da página
    ├── index.css                # tokens de design (cores, fontes, animações)
    ├── data/
    │   ├── nav.js                # itens do menu de navegação
    │   ├── profile.js            # nome, resumo, contatos, idiomas
    │   ├── skills.js             # competências, agrupadas por categoria
    │   ├── projects.js           # conteúdo da seção "Projetos"
    │   └── experience.js         # experiências profissionais e certificações
    ├── hooks/
    │   └── useActiveSection.js   # detecta a seção visível na tela
    └── components/
        ├── Header.jsx             # menu fixo, versão mobile, alternância PT/EN
        ├── Hero.jsx                # seção "Sobre Mim"
        ├── Projects.jsx            # seção "Projetos" (linha do tempo)
        ├── ProjectItem.jsx         # item individual da linha do tempo
        ├── Experience.jsx          # seção "Experiências" e certificações
        ├── ExperienceItem.jsx      # item individual de experiência
        ├── Contact.jsx             # seção "Contato"
        ├── ContactForm.jsx         # formulário de contato (envio por e-mail)
        ├── ContactLink.jsx         # link de contato com ícone
        ├── Footer.jsx
        ├── icons/index.jsx         # ícones em SVG
        └── ui/                     # componentes visuais reutilizáveis
```

## 6. Instalação e execução local

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev
```

O site fica disponível em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve a build localmente, para conferência
```

## 7. Processo de desenvolvimento

### Lab01S01 — Planejamento e prototipação do site (4 pontos)

- [x] Criação do repositório GitHub com README inicial
- [x] Wireframes das páginas no Figma (média fidelidade)
- [x] Protótipo inicial do front-end (React)
- [x] Implementação da navegação (estrutura de páginas e links entre
      seções) e do layout principal (organização visual base do site,
      com cabeçalho, rodapé e área de conteúdo)

**Entrega:** README com imagens dos protótipos, descrição do projeto,
tecnologias previstas e estrutura inicial do site.

### Lab01S02 — Implementação das funcionalidades principais (4 pontos)

- [x] Página "Sobre Mim" com versões em português e inglês
- [x] Página "Projetos" com timeline dinâmica
- [x] Página "Experiências" com dados organizados
- [x] Página "Contato" com ícones e formulário funcional
- [ ] Validações básicas e responsividade *(responsividade ok;
      validações do formulário ainda são apenas as nativas do HTML)*

### Lab01S03 — Hospedagem e finalização do sistema (7 pontos)

- [ ] Deploy completo em Render, Vercel, Heroku, Fly.io ou similar
- [ ] Ajustes visuais e de usabilidade
- [ ] Inserção de imagens/GIFs dos projetos em execução
- [ ] README final com tecnologias utilizadas e link para o site publicado
- [ ] Instruções de uso e desenvolvimento