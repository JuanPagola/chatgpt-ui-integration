import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import Chat from './Chat' // Adjust the import path as needed
import { ChatProvider } from '../../context/ChatContext/ChatContext' // Adjust the import path as needed
import { processMessageToChatGPT } from './utils'

// Mock the processMessageToChatGPT function
vi.mock('./utils', () => ({
  processMessageToChatGPT: vi.fn(),
}))

// Mock components from @chatscope/chat-ui-kit-react
vi.mock('@chatscope/chat-ui-kit-react', () => {
  const actualModule = vi.importActual('@chatscope/chat-ui-kit-react')
  return {
    ...actualModule,
    MainContainer: (props: any) => <div {...props} />,
    ChatContainer: (props: any) => <div {...props} />,
    MessageList: (props: any) => <div {...props} />,
    Message: (props: any) => <div {...props} />,
    MessageInput: (props: any) => <div {...props} />,
    TypingIndicator: (props: any) => <div {...props} />,
  }
})

describe('Chat Component', () => {
  beforeEach(() => {
    render(
      <ChatProvider>
        <Chat />
      </ChatProvider>
    )
  })

  it('should render input field with placeholder', () => {
    // Use document.querySelector to get the element with the data-placeholder attribute
    const inputElement = document.querySelector('div[data-placeholder="Type message here"]')
    expect(inputElement).toBeDefined()
  })

  it('should handle errors and set typing to false', async () => {
    const newMessage = 'Hello!'
    // Mock the API rejection using vi.mocked
    vi.mocked(processMessageToChatGPT).mockRejectedValue(new Error('API error'))

    const inputElement = document.querySelector('div[data-placeholder="Type message here"]')
    if (inputElement) {
      fireEvent.input(inputElement, { target: { innerText: newMessage } })
      // Assuming there's a send button or similar
      fireEvent.click(screen.getByText('Send'))
    }

    await waitFor(() => {
      expect(screen.queryByText('ChiefGPT is typing...')).toBeNull()
    })
  })
})
