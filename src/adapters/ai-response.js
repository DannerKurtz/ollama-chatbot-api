import ollama from "ollama"
import { systemPrompt } from "./system-prompt.js"

export class AiAdapter {
  async generateResponse(prompt) {
    const response = await ollama.chat({
      model: "phi3.5:latest",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
    })

    return response.message.content
  }
}
