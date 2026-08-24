import express from 'express';
import dotenv from 'dotenv';
import { generateResponse } from './ollama.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar requisições com corpo JSON e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Mensagem não fornecida' });
  }
  const response = await generateResponse(message);
  res.status(200).json(response);
});

// Rota de exemplo de status/saúde
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
