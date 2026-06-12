# 🎬 ProjetoP2-Web1

> Projeto desenvolvido como parte da disciplina de **Desenvolvimento Web 1**, utilizando Next.js com App Router e TypeScript.

---

## 📋 Sobre o Projeto

Aplicação web desenvolvida com **Next.js 15** e **TypeScript**, estruturada com o padrão de **App Router**. O projeto aplica conceitos de desenvolvimento front-end moderno, incluindo componentização, roteamento client-side, estilização com CSS modular e boas práticas de organização de código.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.x | Framework React com SSR/SSG |
| [React](https://react.dev/) | 19.x | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipagem estática |
| [CSS Modules](https://github.com/css-modules/css-modules) | — | Estilização escopada |
| [ESLint](https://eslint.org/) | 9.x | Linting e qualidade de código |

---

## 🗂️ Estrutura do Projeto

```
ProjetoP2-Web1/
├── app/                  # Rotas e páginas (App Router)
│   ├── layout.tsx        # Layout raiz da aplicação
│   └── page.tsx          # Página inicial
├── components/           # Componentes reutilizáveis
├── public/               # Arquivos estáticos (imagens, ícones)
├── next.config.ts        # Configurações do Next.js
├── tsconfig.json         # Configurações do TypeScript
├── eslint.config.mjs     # Configurações do ESLint
└── package.json          # Dependências e scripts
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- npm, yarn, pnpm ou bun

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/israelDias-zip/ProjetoP2-Web1.git
cd ProjetoP2-Web1
```

**2. Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

**3. Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

**4. Acesse no navegador**

Abra [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

---

## 📜 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor em modo desenvolvimento com hot-reload
npm run build    # Gera o build otimizado para produção
npm run start    # Inicia o servidor com o build de produção
npm run lint     # Analisa o código com ESLint
```

---

## 🌐 Deploy

O projeto está disponível em produção na **Vercel**:

🔗 **[Acesse aqui → URL_DO_DEPLOY](https://URL_DO_DEPLOY.vercel.app)**

O deploy é feito automaticamente a cada push na branch `main` via integração com o GitHub. A [Vercel](https://vercel.com) é a plataforma oficial de deploy do Next.js e oferece CDN global, HTTPS automático e previews por branch.

Consulte a [documentação oficial de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

## 📚 Recursos e Aprendizado

Para aprofundar nos conceitos utilizados neste projeto:

- [Documentação do Next.js](https://nextjs.org/docs) — funcionalidades e API completa
- [Tutorial interativo do Next.js](https://nextjs.org/learn) — aprenda Next.js na prática
- [Otimização de fontes com next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — como o projeto carrega a fonte [Geist](https://vercel.com/font)
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js)

---

## 👥 Contribuidores

Israel Dias | [@israelDias-zip](https://github.com/israelDias-zip)

Lucas Campos Ferreira | [@LucasCamposFerreira](https://github.com/LucasCamposFerreira)

João Paulo | [@Joaopauloengsoft](https://github.com/Joaopauloengsoft) 

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte da disciplina de **Desenvolvimento Web 1**.

---