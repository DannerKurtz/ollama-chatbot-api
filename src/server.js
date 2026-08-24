import dotenv from "dotenv"
import express from "express"
import { AiAdapter } from "./adapters/ai-response.js"
import { CreateMessageController } from "./controller/chat/create-message.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware para processar requisições com corpo JSON e urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const createMessageController = new CreateMessageController(new AiAdapter())
// Rota principal
app.post("/api/chat", async (req, res) =>
  createMessageController.execute(req, res),
)

// Rota de exemplo de status/saúde
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() })
})

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
})
