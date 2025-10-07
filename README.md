# 🎮 The Last of Us — Front-End


💡 **Bem-vindo ao The Last of Us Front-End!**  
Uma interface moderna e imersiva desenvolvida em **Next.js**, inspirada no universo do jogo *The Last of Us*.  
O projeto consome a API Back-End e apresenta personagens, infectados e armas com design e ambientação sombrios.

---

## 📖 Descrição do Projeto

O **The Last of Us Front-End** é uma aplicação web responsiva que traz a atmosfera única da franquia.  
Explore personagens icônicos, conheça os tipos de infectados e descubra detalhes sobre as armas — tudo em uma experiência visual rica e dinâmica.

---

## 🚀 Funcionalidades

✅ Listagem completa de personagens, infectados e armas  
🔍 Busca dinâmica e filtros por categoria  
📸 Visualização detalhada com imagens e descrições  
📱 Layout responsivo (mobile, tablet e desktop)  
⚡ Integração com API REST via Axios  
🌙 Tema escuro com estética inspirada no jogo  
💬 Animações suaves com Framer Motion

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Next.js** | Framework React com renderização no servidor |
| **React.js** | Criação de componentes reutilizáveis |
| **Axios** | Comunicação com a API REST |
| **Ant Design** | Componentes visuais prontos e responsivos |
| **TailwindCSS / CSS Modules** | Estilização moderna e responsiva |
| **Framer Motion** | Animações e transições suaves |
| **Vercel** | Deploy e hospedagem contínua |
| **Git / GitHub** | Controle de versão e colaboração |

---

## 📂 Estrutura do Projeto

```
.
├── public/
│ ├── images/
│ ├── preview.png # imagem usada na seção de preview
│ └── favicon.ico
├── src/
│ ├── app/
│ │ ├── page.jsx
│ │ ├── character/
│ │ │ └── [id]/
│ │ ├── infected/
│ │ │ └── [id]/
│ │ └── weapon/
│ │ └── [id]/
│ │ └── layout.jsx
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── CharacterCards.jsx
│ │ ├── InfectedCard.jsx
│ │ └── WeaponsCards.jsx
│ ├── styles/
│ │ └── globals.css
│ └── utils/
│ └── api.js
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

yaml
Copiar código

💡 **Dica:** O arquivo `src/utils/api.js` centraliza a comunicação com o back-end (`http://localhost:4000/api`).

---

## ⚙️ Pré-requisitos

Antes de iniciar, verifique se possui instalado:  

- **Node.js** (versão 18 ou superior)  
- **npm** ou **yarn**  
- O **Back-End** do projeto em execução

---

## 🧩 Instalação e Execução

1️⃣ **Clone o repositório:**

```bash
git clone https://github.com/EvelynOliveira1200/TheLastOfUs-FrontEnd.git
cd TheLastOfUs-FrontEnd
2️⃣ Instale as dependências:

bash
Copiar código
npm install
# ou
yarn
3️⃣ Configure as variáveis de ambiente:
Crie o arquivo .env.local na raiz do projeto com o seguinte conteúdo:

bash
Copiar código
NEXT_PUBLIC_API_URL=http://localhost:4000/api
4️⃣ Execute o servidor de desenvolvimento:

bash
Copiar código
npm run dev
✅ O front-end estará rodando em: http://localhost:3000

🧠 Integração com o Back-End
A aplicação consome os dados diretamente do projeto The Last of Us Back-End:

Entidade	Endpoint
Personagens	/characters
Infectados	/infecteds
Armas	/weapons

💡 Os dados são renderizados dinamicamente via Axios e useEffect.

💅 Estilo e Design
🎨 Paleta de Cores: tons escuros, dourados e terrosos
🔠 Tipografia: fontes fortes e minimalistas
🌌 Tema: inspirado na ambientação pós-apocalíptica do jogo
🎬 Animações: transições suaves em hover e carregamento

🧰 Scripts Disponíveis
json
Copiar código
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
🧾 Licença
Este projeto está sob a MIT License.
Consulte o arquivo LICENSE para mais informações.

🤝 Contribuindo
1️⃣ Faça um fork do repositório
2️⃣ Crie uma branch para sua feature:

bash
Copiar código
git checkout -b feature/minha-feature
3️⃣ Faça commit das alterações:

bash
Copiar código
git commit -m "Adiciona nova funcionalidade"
4️⃣ Envie para o seu fork:

bash
Copiar código
git push origin feature/minha-feature
5️⃣ Abra um Pull Request 🎉

📬 Contato
👩‍💻 Desenvolvido por: Evelyn Gonçalves de Oliveira
📧 E-mail: evelyn.g.oliveira7@aluno.senai.br
🔗 LinkedIn: [adicione aqui seu link]

💬 “Quando você está perdido na escuridão... procure a luz.” — Fireflies 🔥