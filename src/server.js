import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar requisições com corpo JSON e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'Servidor Express está rodando com sucesso!',
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Rota de exemplo de status/saúde
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
