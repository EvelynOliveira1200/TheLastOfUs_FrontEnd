# 🎮 The Last of Us — Front-End

### 📝 Descrição

Aplicação web desenvolvida em **Next.js + React** que consome a API do *The Last of Us Back-End*, permitindo explorar **personagens**, **infectados** e **armas** com design imersivo e responsivo.  

O front-end apresenta **busca dinâmica**, **filtros por categoria**, **visualização detalhada**, **tema escuro** e animações suaves inspiradas na atmosfera do jogo.

---

## 📚 Sumário

* [⚙️ Pré-requisitos](#-pré-requisitos)  
* [🧩 Estrutura do projeto](#-estrutura-do-projeto)  
* [🚀 Instalação (passo a passo)](#-instalação-passo-a-passo)  
* [🔑 Variáveis de ambiente (`.env.local`)](#-variáveis-de-ambiente-envlocal)  
* [🖥️ Inicialização](#️-inicialização)  
* [🔗 Integração com API](#-integração-com-api)  
* [💅 Estilo e design](#-estilo-e-design)  
* [🧰 Scripts disponíveis](#-scripts-disponíveis)  
* [🤝 Como contribuir](#-como-contribuir)  
* [🧾 Licença](#-licença)  
* [📬 Contato](#-contato)  

---

## ⚙️ Pré-requisitos

Antes de começar, garanta que possui instalado:

* [Node.js](https://nodejs.org/) (v18+ recomendado)  
* npm ou yarn  
* Back-End do projeto em execução (`http://localhost:4000`)  

> 💡 **Dica:** O front-end depende da API para renderizar os dados de personagens, infectados e armas.

---

## 🧩 Estrutura do projeto
````
.
├── public/
│ ├── images/
│ ├── fonts/
| ├── image/
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── home/
│ │ ├── character/
│ │ │ └── [id]/
│ │ ├── infected/
│ │ │ └── [id]/
│ │ ├── weapon/
│ │ |  └── [id]/
| | ├── sobre/
| | ├── globals.css
│ │ ├──layout.jsx
| | └── page.js
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── CharacterCards.jsx
│ │ ├── InfectedCard.jsx
│ │ └── WeaponsCards.jsx
│ └── styles/
├── next.config.js
├── package.json
└── README.md
````

> 💡 **Nota:** `src/utils/api.js` centraliza todas as requisições à API (`http://localhost:4000/api`).

---

## 🚀 Instalação e Inicialização

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/EvelynOliveira1200/TheLastOfUs-FrontEnd.git
cd the-last-of-us-frontend
code .
```

### 2️⃣ Instale as dependências

```bash
npm install
# ou
yarn
```

### 4️⃣ Executar o servidor

```bash
npm run dev
# ou
year dev
```

✅ **O front-end estará rodando em:** `http://localhost:3000`

## 🖥️ Inicialização

Scripts recomendados no `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### ▶️ Executar o front-end
```bash
npm run dev
# ou
year dev
```

## 🔗 Integração com API

> Base URL: `http://localhost:4000/api`

Entidades e endpoints

| Entidade     | Endpoint       |
|-------------:|:---------------|
| Personagens  | `/characters`  |
| Infectados   | `/infecteds`   |
| Armas        | `/weapons`     |

> 💡 Os dados são carregados dinamicamente com Axios dentro de hooks (useEffect). A base da API está definida em `http://localhost:4000/api`.

## 💅 Estilo e design

- 🎨 Paleta: tons escuros, dourados e terrosos
- 🔠 Tipografia: fontes fortes e minimalistas
- 🌌 Tema: ambientação pós-apocalíptica inspirada no jogo
- 🎬 Animações: transições suaves (Framer Motion)
- 📱 Responsividade: mobile · tablet · desktop

## 🤝 Como contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/minha-feature
```

3. Faça commits claros e pequenos:

```bash
git commit -m "Adiciona nova funcionalidade"
```

4. Envie a branch para seu fork:

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request com descrição, screenshots e passos para testar.

> Dica: siga o padrão de commits do projeto e descreva claramente o que foi alterado.

## 🧾 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 📬 Contato

- **GitHub:** [EvelynOliveira1200](https://github.com/EvelynOliveira1200)
- **Linkedin:** [Evelyn Oliveira](https://www.linkedin.com/in/evelyn-gon%C3%A7alves-de-oliveira-067a4a275/)
- **E-mail:** evelyn.g.oliveira7@aluno.senai.br

> “Quando você está perdido na escuridão... procure a luz.” — Fireflies