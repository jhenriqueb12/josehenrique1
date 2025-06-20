# 🍕 Pizzaria App

Aplicação web simples de uma pizzaria feita com Node.js, Express, EJS e Sequelize, utilizando banco de dados MySQL.

Permite cadastrar, listar, editar e excluir pizzas através de uma interface web.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

---

## 📸 Funcionalidades

- Página inicial da pizzaria
- Listagem de pizzas cadastradas
- Cadastro de novas pizzas
- Edição e exclusão de pizzas
- Interface com **EJS + Partials**
- Conexão e manipulação via banco MySQL

---

## 📦 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pizzaria-app.git
cd pizzaria-app

## 2. Instale as dependências
npm install

## 3. Configure o MySQL
1. Inicie o MySQL na sua máquina local

## 2. Crie o banco de dados
CREATE DATABASE pizzaria;

## 3. Atualize o arquivo config/database.js com os dados do seu ambiente
const sequelize = new Sequelize('pizzaria', 'root', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql'
});

## 4. Rode o projeto
npm start
Se estiver tudo certo, você verá:
Servidor rodando em http://localhost:3000

## 5. Acesse no navegador
 http://localhost:3000
