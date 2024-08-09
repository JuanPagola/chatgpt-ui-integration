import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Chat } from './components/Chat'
import { ToastContainer } from 'react-toastify'
import { Header } from './layouts/Header'
import { ChatProvider } from './context/ChatContext/ChatContext'

const App = () => {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/">
              <Route index element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </ChatProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
