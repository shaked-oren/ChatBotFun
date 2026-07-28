import { useState } from "react";
import { ChatMessages } from "./components/ChatMessages";
import { MessageInput } from "./components/MessageInput";

function App() {
  const initialMessages = [
    {
      message: "Hello, I am a chatbot. How can I help you today?",
      sender: "chatbot",
      id: 1
    }
  ]; 
  const [messageList, setMessageList] = useState(initialMessages);

  return (
    <div className="app">
      <ChatMessages messageList={messageList} />
      <MessageInput messageList={messageList} setMessageList={setMessageList} />
    </div>
  )
}


export default App
