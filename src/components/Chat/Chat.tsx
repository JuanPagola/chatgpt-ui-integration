import { MainContainer, ChatContainer, MessageList, Message, MessageInput, MessageModel } from '@chatscope/chat-ui-kit-react'
import { useContext, useState } from 'react'
import { processMessageToChatGPT } from './utils'
import { ChatContext } from '../../context/ChatContext/ChatContext'

const Chat = () => {
  const { setIsTyping } = useContext(ChatContext)
  const [messages, setMessages] = useState<MessageModel[]>([
    {
      message: "Hello, I'm ChiefGPT! Ask me anything!",
      sentTime: 'just now',
      sender: 'ChatGPT',
      direction: 'incoming',
      position: 0,
    },
  ])

  const handleSend = async (message: string) => {
    const newMessage: MessageModel = {
      message,
      sentTime: new Date().toLocaleTimeString(),
      sender: 'user',
      direction: 'outgoing',
      position: 0,
    }

    const newMessages = [...messages, newMessage]
    setMessages(newMessages)

    setIsTyping(true)

    // Get the response from ChatGPT
    let chatGPTProccesedResponse: MessageModel
    try {
      chatGPTProccesedResponse = await processMessageToChatGPT(newMessages)
      setMessages((prev) => [...prev, chatGPTProccesedResponse])
      setIsTyping(false)
    } catch (error) {
      setIsTyping(false)
    }
  }

  return (
    <div className="relative h-full w-full">
      <MainContainer>
        <ChatContainer>
          <MessageList scrollBehavior="smooth">
            {messages.map((msg, i) => (
              <Message key={i} model={msg} />
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} attachButton={false} />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Chat
