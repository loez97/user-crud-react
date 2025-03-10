# Cadastro Simples (CRUD) - React + Express + Prisma + Vite + MongoDB

Este é um projeto CRUD simples de cadastro de usuários, onde é possível registrar Nome, Idade e Email. Os dados são enviados para um servidor Express via API e armazenados em um banco de dados MongoDB. As informações cadastradas são refletidas dinamicamente abaixo do formulário na mesma página.

## 🚀 Tecnologias Utilizadas
- **React** (com Vite)
- **Express.js** (Servidor Backend)
- **Prisma** (ORM para MongoDB)
- **MongoDB** (Banco de Dados NoSQL)
- **Node.js** (Ambiente de Execução)

## 📦 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```sh
  git clone https://github.com/loez97/user-crud-react.git
```
### 2️⃣ Iniciar o Servidor
```sh
cd servidor
node server.js
```
O backend rodará por padrão em `http://localhost:5000`.

### 3️⃣ Iniciar o Frontend
```sh
cd cadastro
npm run dev
```
O frontend rodará por padrão em `http://localhost:5173`.

## 🛠 Funcionalidades
- Cadastro de usuários (Nome, Idade e Email).
- Exibição dinâmica dos usuários cadastrados na mesma página.
- Integração com API Express para armazenamento no MongoDB via Prisma.

## 📌 Endpoints da API
| Método | Rota         | Descrição                     |
|---------|-------------|--------------------------------|
| GET     | /users      | Lista todos os usuários       |
| POST    | /users      | Cria um novo usuário         |
| DELETE  | /users/:id  | Remove um usuário pelo ID    |

## 📝 Autor
Projeto desenvolvido por Luiz Gonzaga

