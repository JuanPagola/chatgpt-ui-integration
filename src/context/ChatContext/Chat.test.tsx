import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useContext } from 'react'
import { ChatContext, ChatProvider } from './ChatContext'
import '@testing-library/jest-dom'

// Test component to consume the context
const TestComponent = () => {
  const { isTyping, setIsTyping } = useContext(ChatContext)

  return (
    <div>
      <p data-testid="is-typing">{isTyping ? 'Typing...' : 'Not typing'}</p>
      <button onClick={() => setIsTyping(!isTyping)}>Toggle Typing</button>
    </div>
  )
}

describe('ChatContext', () => {
  it('provides the initial context value', () => {
    render(
      <ChatProvider>
        <TestComponent />
      </ChatProvider>
    )

    // Check initial context value
    expect(screen.getByTestId('is-typing')).toHaveTextContent('Not typing')
  })

  it('updates context value when setIsTyping is called', () => {
    render(
      <ChatProvider>
        <TestComponent />
      </ChatProvider>
    )

    // Simulate user interaction
    fireEvent.click(screen.getByText('Toggle Typing'))

    // Check updated context value
    expect(screen.getByTestId('is-typing')).toHaveTextContent('Typing...')

    // Toggle back
    fireEvent.click(screen.getByText('Toggle Typing'))
    expect(screen.getByTestId('is-typing')).toHaveTextContent('Not typing')
  })
})
