
# Cadastro Simples (CRUD)

Este é um projeto CRUD simples de cadastro de usuários, onde é possível registrar Nome, Idade e Email. Os dados são enviados para um servidor Express via API e armazenados em um banco de dados MongoDB. As informações cadastradas são refletidas dinamicamente abaixo do formulário na mesma página.
## Funcionalidades

- Cadastro de usuários (Nome, Idade e Email).
- Exibição dinâmica dos usuários cadastrados na mesma página.
- Integração com API Express para armazenamento no MongoDB via Prisma.
## Stack utilizada

**Front-end:** React (com Vite)

**Back-end:** Node.js, Express.js, Prisma, MongoDB,
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/loez97/user-crud-react.git
```

Iniciar o Servidor

```bash
  cd servidor
  node server.js

  O backend rodará por padrão em `http://localhost:5000`
```

Iniciar o Frontend

```bash
  cd cadastro
  npm run dev
  
  O frontend rodará por padrão em `http://localhost:5173`
```
## Documentação da API


| Método   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/users` | Lista todos os usuários |
| `POST` | `/users` | Cria um novo usuário |
| `DELETE` | `/users/:id` | Remove um usuário pelo ID |
