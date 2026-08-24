export class CreateMessageController {
  constructor(aiAdapter) {
    this.aiAdapter = aiAdapter
  }
  async execute(req, res) {
    const { message } = req.body
    if (!message) {
      return res.status(400).json({ error: "Mensagem não fornecida" })
    }
    const response = await this.aiAdapter.generateResponse(message)
    res.status(200).json(response)
  }
}
