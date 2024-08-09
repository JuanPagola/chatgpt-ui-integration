import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { ChatContext } from '../../context/ChatContext/ChatContext'

const Header = () => {
  const { isTyping } = useContext(ChatContext)

  return (
    <div className="h-minus-3rem h-full w-full">
      <div className="flex h-12 items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <img src="./robot.svg" alt="logo" className="h-8 w-8" />
          {isTyping ? <TypingIndicator content="ChiefGPT is typing..." /> : null}
        </div>
        <div className="flex items-center">
          <p className="text-lg">ChiefGPT</p> {/* Adjust text size as needed */}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Header
