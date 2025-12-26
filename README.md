# 🚀 API Node.js com Autenticação JWT e MySQL

Este projeto é uma API backend desenvolvida em **Node.js** utilizando **Express**, **MySQL**, **JWT** para autenticação e **Handlebars** para renderização da tela de login.  
O sistema possui cadastro de usuários, login com geração de token JWT e proteção de rotas via middleware.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- JWT (JSON Web Token)
- Handlebars

---

## 📦 Bibliotecas e Dependências

| Biblioteca | Descrição |
|-----------|----------|
| express | Framework web para Node.js |
| mysql2 | Cliente MySQL com suporte a Promise |
| jsonwebtoken | Geração e validação de tokens JWT |
| bcrypt | Criptografia de senhas |
| dotenv | Gerenciamento de variáveis de ambiente |
| express-handlebars | Template engine para views |
| express-fileupload | Upload de arquivos |
| nodemon (opcional) | Reinício automático do servidor em desenvolvimento |

---

## 📁 Estrutura do Projeto

├── app.js
├── .env
├── routes/
│ ├── auth.routes.js
│ └── users.routes.js
├── middlewares/
│ └── autenticar.js
├── config/
│ └── db.js
├── views/
│ └── login.handlebars
├── css/
├── image/
├── package.json
├── .gitignore
└── README.md


---

## ⚙️ Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js (versão 18 ou superior recomendada)
- MySQL
- Git

---

## 🔐 Configuração do Ambiente

Crie um arquivo **`.env`** na raiz do projeto com o seguinte conteúdo:

PORT=3333

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

JWT_SECRET=sua_chave_secreta



⚠️ **Importante:**  
O arquivo `.env` não deve ser versionado (ele deve estar no `.gitignore`).

---

## ▶️ Como Instalar e Executar o Projeto

### 1️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/nome-do-repositorio.git

### 2️⃣ Acessar a pasta do projeto

cd nome-do-repositorio


### 3️⃣ Instalar as dependências

npm install


### 4️⃣ Executar o servidor

node app.js  ou nodemon app.js("se já estiver com dependencia do NODEMON instalada)


---

## 🌐 Rotas da Aplicação

### 🔓 Login (gera token JWT)

POST /Api/validar

### 📝 Cadastro de Usuário

POST /api/cadastrar

### 🔐 Listar Usuários (rota protegida)

GET /api/users

📌 Para acessar rotas protegidas, envie o token no header:

Authorization: Bearer SEU_TOKEN_AQUI

---

## 🛡️ Segurança

- Senhas armazenadas com **bcrypt**
- Autenticação baseada em **JWT**
- Middleware para validação de token
- Variáveis sensíveis protegidas via `.env`

---

## 📌 Observações Importantes

- A pasta `node_modules` não é versionada
- O token JWT possui tempo de expiração
- Código organizado em rotas, middlewares e configurações
- Projeto estruturado seguindo boas práticas de backend

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.




