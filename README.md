![GitHub repo size](https://img.shields.io/github/repo-size/LucasHARosa/ConsultoriaLA)
![GitHub language count](https://img.shields.io/github/languages/count/LucasHARosa/ConsultoriaLA)
![GitHub top language](https://img.shields.io/github/languages/top/LucasHARosa/ConsultoriaLA)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasHARosa/ConsultoriaLA)

# ConsultoriaLA – Website Institucional

Projeto de **website institucional moderno e responsivo** desenvolvido com **React, TypeScript e Vite**, utilizando a biblioteca de componentes **shadcn/ui** e **Tailwind CSS** para um design clean e profissional.

O foco deste repositório é servir como **vitrine digital para serviços de consultoria**, oferecendo uma experiência de usuário fluida e performática.

---

## 📌 Objetivo do Projeto

- Apresentar **serviços de consultoria** de forma profissional
- Proporcionar uma **navegação intuitiva** e responsiva
- Demonstrar **casos de sucesso** e portfólio
- Facilitar o **contato com clientes** potenciais
- Servir como **referência para landing pages** corporativas

---

## 🧱 Estrutura do Projeto

O projeto utiliza uma organização clara e escalável, separando responsabilidades:

## 📁 Estrutura de Pastas

```text
├── src
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Cases.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   └── NotFound.tsx
│   │
│   ├── components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── ui/
│   │       └── (shadcn components)
│   │
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   └── lib
│       └── utils.ts
│
├── public
│   └── robots.txt
│
└── config files
```

### 🔹 Conceitos aplicados

- Roteamento com React Router DOM
- Componentização reutilizável
- Design System com shadcn/ui
- Responsividade mobile-first
- SEO otimizado
- Performance com Vite
- Integração com WhatsApp

---

## 🚀 Funcionalidades

As principais funcionalidades do projeto incluem:

- 🏠 **Página inicial** apresentando a empresa
- 💼 **Serviços** detalhados oferecidos
- 📊 **Cases de sucesso** e portfólio
- 👥 **Sobre nós** com informações da equipe
- 📞 **Formulário de contato** integrado
- ❓ **FAQ** com perguntas frequentes
- 💬 **Botão flutuante do WhatsApp** para contato rápido
- 📱 **Design 100% responsivo**
- ⚡ **Carregamento otimizado**

---

## ▶️ Executando o Projeto

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

---

## 🛠️ Tecnologias Utilizadas

- **React 18** – Biblioteca JavaScript para interfaces
- **TypeScript** – Superset JavaScript com tipagem estática
- **Vite** – Build tool moderna e rápida
- **Tailwind CSS** – Framework CSS utility-first
- **shadcn/ui** – Componentes acessíveis e customizáveis
- **React Router DOM** – Roteamento para SPA
- **React Hook Form** – Gerenciamento de formulários
- **Zod** – Validação de schemas
- **Lucide React** – Biblioteca de ícones
- **TanStack Query** – Gerenciamento de estado assíncrono
- **Recharts** – Biblioteca de gráficos
- **Sonner** – Sistema de notificações toast

---

## 🚀 Deploy

Projeto pronto para deploy na **Vercel** ou qualquer plataforma que suporte aplicações React/Vite.

### Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Build de produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

---

## 📚 Referências

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)

---

<div align="center">
    
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) 

</div>
