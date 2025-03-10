import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

// Criar um novo usuário
app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
});

// Buscar todos os usuários
app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Atualizar um usuário
app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(400).json({ error: "Erro ao atualizar usuário" });
  }
});

// Deletar um usuário
app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(400).json({ error: "Erro ao deletar usuário" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
