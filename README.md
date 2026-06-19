<div align="center">

# 🕸️ Portfolio Silksong — Isabel Paixão

**Portfólio pessoal desenvolvido com tema em Hollow Knight: Silksong**

[![Angular](https://img.shields.io/badge/Angular-17-C8102E?style=flat-square&logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## ✨ Sobre o Projeto

Portfólio pessoal inspirado visualmente em **Hollow Knight: Silksong** — com a estética dark-fantasy do jogo, a paleta de vermelho, roxo e creme, e a simbologia dos fios de seda da personagem Hornet como metáfora para o desenvolvimento de software: cada linha de código é um fio que conecta lógica, estética e propósito.

A interface foi projetada para parecer um **jogo interativo**, com elementos de HUD, mapa de mundo, nós de área e animações que respondem ao movimento do mouse.

---

## 🎮 Funcionalidades

- **Cursor customizado** — losango vermelho com inércia suave que acompanha o mouse
- **Fios de seda interativos** — 18 threads animadas no canvas que são atraídas pelo cursor em tempo real, com faíscas na ponta da agulha
- **HUD estilo game** — barra de navegação com status "ONLINE" piscando e fonte pixel
- **Banner com Hornet** — ilustração SVG da Hornet animada flutuando com glow vermelho
- **Pixel art animada** — bonequinha da Hornet em pixel art com animação de bob e fios de seda vivos
- **Mapa de mundo** — fio vertical percorre a página inteira com nós em diamante que acendem ao entrar em cada seção
- **Estalactites de caverna** — SVG no hero com gotas pingando
- **Esporos flutuantes** — partículas animadas em loop no hero
- **Scroll reveal** — cada seção entra com animação suave via IntersectionObserver
- **Cards de projeto com SVG temático** — cada projeto tem uma ilustração SVG única desenhada no código

---

## 🗺️ Seções

| Área | Seção | Conteúdo |
|------|-------|----------|
| 01 | **Origem** | Sobre mim + pixel art animada da Hornet |
| 02 | **Arsenal** | Habilidades técnicas e soft skills |
| 03 | **Missões** | Projetos desenvolvidos |
| 04 | **Nexo** | Contato: GitHub, LinkedIn, Email, WhatsApp |

---

## 🚀 Projetos no Portfólio

### ★ BAIANAr *(Destaque)*
Sistema completo de pedidos e gestão para restaurantes com quatro interfaces em Angular 17.
`Angular 17` `Firebase` `Firestore` `TypeScript` `SCSS` `Vercel`
→ [Demo](https://baianar.vercel.app) · [GitHub](https://github.com/ipaixao1/Comanda-Digital---BAIANAr)

### ◈ Brisa Vinícola *(TCC)*
E-commerce sofisticado de vinhos — TCC do curso técnico de Informática para a Internet.
`HTML` `CSS` `JavaScript` `PHP` `MySQL` `XAMPP`

### ◈ Impressora Elgin *(Faculdade — 2º Semestre)*
Aplicação Java para controle de impressora térmica Elgin via menu interativo: QR Code, código de barras, nota fiscal e corte de papel.
`Java` `ESC/POS` `OOP`
→ [GitHub](https://github.com/anna-clara6/impressora-elgin-final)

### Portfolio Silksong
Este próprio portfólio — uma interface que se apresenta dentro de si mesma.
`Angular 17` `TypeScript` `SCSS` `Canvas 2D` `Vercel`

---

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── cursor/           → Cursor customizado (losango vermelho com inércia)
│   │   ├── silk-canvas/      → Canvas de fios de seda interativos + faíscas
│   │   ├── hud/              → Barra de navegação estilo HUD de videogame
│   │   ├── hero/             → Banner com Hornet SVG flutuando + stalactites + esporos
│   │   ├── pixel-hornet/     → Pixel art animada da Hornet (Canvas 2D API)
│   │   ├── sobre/            → Seção "Sobre Mim" — Área 01
│   │   ├── skills/           → Seção de habilidades — Área 02
│   │   ├── projetos/         → Seção de projetos — Área 03
│   │   ├── contato/          → Seção de contato — Área 04
│   │   └── footer/           → Rodapé
│   ├── shared/
│   │   └── models/
│   │       └── reveal.service.ts   → Serviço de scroll reveal (IntersectionObserver)
│   ├── app.component.ts
│   └── app.config.ts
└── assets/
    └── styles/
        └── global.scss       → Design tokens, reset e estilos compartilhados
```

---

## 🎨 Design System

### Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#06030A` | Fundo principal |
| `--bg2` | `#0D0614` | Fundo secundário (seções alternadas) |
| `--bg3` | `#140A1E` | Fundo terciário (cards hover) |
| `--red` | `#C8102E` | Vermelho Hornet — cor de destaque principal |
| `--red2` | `#8B0A1F` | Vermelho escuro — botões |
| `--cream` | `#D8CAB4` | Texto principal (cor da máscara da Hornet) |
| `--cream2` | `#8A7D6E` | Texto secundário / muted |
| `--lav` | `#7B6FC8` | Lavanda Silksong — acento secundário |
| `--gold` | `#C8A44A` | Dourado — ornamentos e detalhes |

### Tipografia

| Fonte | Uso |
|-------|-----|
| **Cinzel** | Títulos e display — vibe épico medieval |
| **Inter** | Corpo de texto — leitura limpa |
| **VT323** | Labels de UI e HUD — estética pixel/game |

---

## 🛠️ Tecnologias

- **Angular 17** com Standalone Components, Signals e lazy loading
- **TypeScript 5.4** com strict mode
- **SCSS** com CSS Custom Properties para tokens de design
- **Canvas 2D API** para os fios de seda e a pixel art da Hornet
- **IntersectionObserver** para scroll reveal e nós do mapa de mundo
- **Google Fonts** — Cinzel + Inter + VT323

---

## ⚙️ Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Servidor de desenvolvimento
npm start
# Acesse → http://localhost:4200

# 3. Build de produção
npm run build:prod
```

---

## 🌐 Deploy no Vercel

O projeto já vem com `vercel.json` configurado para SPA routing.

```bash
# Instale a CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📬 Contato

<div>

[![GitHub](https://img.shields.io/badge/GitHub-ipaixao1-181717?style=flat-square&logo=github)](https://github.com/ipaixao1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Isabel%20Paixão-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/isabel-paix%C3%A3o%F0%9F%A6%8B-2abb45231/)
[![Email](https://img.shields.io/badge/Email-sisabelvirginia%40gmail.com-C8102E?style=flat-square&logo=gmail&logoColor=white)](mailto:sisabelvirginia@gmail.com)

</div>

---

<div align="center">

*Tecido com propósito, linha por linha.* 🕸️

</div>
