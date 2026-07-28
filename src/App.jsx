import { useState } from "react";
import { ChatMessages } from "./components/ChatMessages";


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
      <QuestionBar messageList={messageList} setMessageList={setMessageList} />
    </div>
  )
}

function QuestionBar({ messageList, setMessageList }) {
  const placeholder = "Please enter your question for the chat"
  const [message, setMessage] = useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit() {
    const newMessageList = [...messageList, {
      message: message,
      sender: "user",
      id: crypto.randomUUID()
    }];
    setMessageList( newMessageList );
    const newMessageListAfterThinking = [...newMessageList, {
      message: "Thinking...",
      sender: "chatbot",
      id: crypto.randomUUID()
    }];
    setMessageList( newMessageListAfterThinking );

    setMessage("");
  }

  return ( 
    <div className="question-bar">
      <input
        className="question-input"
        type="text"
        value={message}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}



export default App
