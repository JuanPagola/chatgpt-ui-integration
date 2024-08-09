import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'
import { ChatContext } from '../../context/ChatContext/ChatContext'

// Create a mock context provider
const mockChatContext = (isTyping: boolean) => ({
  isTyping,
  setIsTyping: () => {}, // You can use a no-op function for this test
})

describe('Header Component', () => {
  it('renders the logo image', () => {
    render(
      <ChatContext.Provider value={mockChatContext(false)}>
        <Header />
      </ChatContext.Provider>
    )
    const logo = screen.getByAltText('logo')
    expect(logo).toBeDefined()
  })

  it('renders the TypingIndicator when isTyping is true', () => {
    render(
      <ChatContext.Provider value={mockChatContext(true)}>
        <Header />
      </ChatContext.Provider>
    )
    const typingIndicator = screen.getByText(/ChiefGPT is typing.../)
    expect(typingIndicator).toBeDefined()
  })

  it('does not render the TypingIndicator when isTyping is false', () => {
    render(
      <ChatContext.Provider value={mockChatContext(false)}>
        <Header />
      </ChatContext.Provider>
    )
    const typingIndicator = screen.queryByText(/ChiefGPT is typing.../)
    expect(typingIndicator).toBeNull()
  })

  it('renders the ChiefGPT text', () => {
    render(
      <ChatContext.Provider value={mockChatContext(false)}>
        <Header />
      </ChatContext.Provider>
    )
    const text = screen.getByText(/ChiefGPT/i)
    expect(text).toBeDefined()
  })
})
