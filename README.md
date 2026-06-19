# Portfolio Silksong — Isabel Nascimento

Portfólio pessoal inspirado em **Hollow Knight: Silksong**, desenvolvido em **Angular 17** com componentes standalone, SCSS e TypeScript.

---

## ⚔️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── cursor/           → Cursor customizado (losango vermelho)
│   │   ├── silk-canvas/      → Canvas de fios de seda interativos
│   │   ├── hud/              → Barra de navegação estilo HUD de jogo
│   │   ├── hero/             → Banner principal com Hornet SVG animada
│   │   ├── pixel-hornet/     → Pixel art animada da Hornet (canvas 2D)
│   │   ├── sobre/            → Seção "Sobre Mim" — Área 01
│   │   ├── skills/           → Seção de habilidades — Área 02
│   │   ├── projetos/         → Seção de projetos — Área 03
│   │   ├── contato/          → Seção de contato — Área 04
│   │   └── footer/           → Rodapé
│   ├── shared/
│   │   └── models/
│   │       └── reveal.service.ts   → Serviço de scroll reveal
│   ├── app.component.ts
│   └── app.config.ts
└── assets/
    └── styles/
        └── global.scss       → Tokens CSS, reset e estilos compartilhados
```

---

## 🚀 Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm start
# Acesse http://localhost:4200

# 3. Build para produção
npm run build:prod
```

---

## ✏️ Personalizações Essenciais

### Seus links de contato
Edite **`src/app/components/contato/contato.component.ts`**:

```typescript
email    = 'SEU_EMAIL@gmail.com';
github   = 'https://github.com/SEU_USUARIO';
linkedin = 'https://linkedin.com/in/SEU_USUARIO';
whatsapp = 'https://wa.me/55SEUNUMERO';
```

### Seus projetos
Edite **`src/app/components/projetos/projetos.component.ts`** — modifique o array `projects[]` com seus dados reais.

### Seu nome e texto
Edite **`src/app/components/hero/hero.component.html`** e **`sobre/sobre.component.html`**.

---

## 🎨 Paleta de Cores

| Token          | Hex         | Uso                         |
|----------------|-------------|------------------------------|
| `--bg`         | `#06030A`   | Fundo principal              |
| `--bg2`        | `#0D0614`   | Fundo secundário (seções)    |
| `--red`        | `#C8102E`   | Vermelho Hornet — destaque   |
| `--cream`      | `#D8CAB4`   | Texto principal (máscara)    |
| `--lav`        | `#7B6FC8`   | Lavanda Silksong             |
| `--gold`       | `#C8A44A`   | Ornamentos dourados          |

---

## 🌐 Deploy no Vercel

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Deploy direto
vercel --prod
```

O arquivo `vercel.json` já está configurado para redirecionar todas as rotas para `index.html` (SPA routing).

---

## 📁 Tecnologias

- Angular 17 (Standalone Components + Signals)
- TypeScript 5.4
- SCSS com CSS Custom Properties
- Canvas 2D API (silk threads + pixel art)
- IntersectionObserver (scroll reveal + area nodes)
- Google Fonts: Cinzel + Inter + VT323
