import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react'

type ChatContextType = {
  isTyping: boolean
  setIsTyping: Dispatch<SetStateAction<boolean>>
}

export const ChatContext = createContext<ChatContextType>({
  isTyping: false,
  setIsTyping: () => {},
})

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const contextValue: ChatContextType = {
    isTyping,
    setIsTyping,
  }

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
}
