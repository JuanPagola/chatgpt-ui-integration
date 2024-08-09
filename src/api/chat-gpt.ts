import axios from 'axios'

export type ChatCompletionResponse = {
  choices: Array<{
    finish_reason: string
    index: number
    message: {
      content: string
      role: string
    }
    role: string
  }>
  created: number
  id: string
  model: string
  object: string
  usage: {
    completion_tokens: number
    prompt_tokens: number
    total_tokens: number
  }
}

export type ChatGPTMessage = {
  role: string
  content: string
}

export const sendMessageToChatGPT = async (messages: ChatGPTMessage[]): Promise<ChatCompletionResponse> => {
  const apiRequestBody = {
    model: 'gpt-3.5-turbo',
    messages: messages,
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', apiRequestBody, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`,
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
