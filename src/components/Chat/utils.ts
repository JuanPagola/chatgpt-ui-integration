import { MessageModel } from '@chatscope/chat-ui-kit-react'
import { sendMessageToChatGPT } from '../../api/chat-gpt'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

export type ProccessedMessage = {
  message: string
  sender: string
  sentTime: string
  direction: 'incoming' | 'outgoing'
  position: 0 | 1
}

export async function processMessageToChatGPT(chatMessages: MessageModel[]): Promise<ProccessedMessage> {
  const systemMessage = {
    role: 'system',
    content: "Explain things like you're talking to a software professional with 2 years of experience.",
  }

  // Reformat the messages for the ChatGPT API
  const apiMessages = chatMessages.map((messageObject) => {
    const role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user'
    return { role: role, content: messageObject.message! }
  })

  try {
    const response = await sendMessageToChatGPT([systemMessage, ...apiMessages])

    return {
      message: response.choices[0].message.content,
      sender: 'ChatGPT',
      sentTime: new Date().toLocaleTimeString(),
      direction: 'incoming',
      position: 0,
    }
  } catch (error: AxiosError | any) {
    toast.error(`Error fetching data from ChatGPT API: ${error.message || error}`)
    throw error
  }
}
