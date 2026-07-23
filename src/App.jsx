import { useState } from "react";



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
      <QuestionBar messageList={messageList} setMessageList={setMessageList} />
      <AllMessages messageList={messageList} />
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

function AllMessages({ messageList }) {
  return messageList.map((message) => (
    <MessageOnScreen key={message.id} message={message.message} sender={message.sender}/>
  ));
}


function MessageOnScreen({message, sender}) {
  const imageUser = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  const imageChatbot = "https://cdn-icons-png.flaticon.com/512/13330/13330989.png"

  return (
    <div className={`div-message-${sender}`} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {sender == 'chatbot' && (
        <img src={imageChatbot} width="100px" height="100px"/>
        )} 
      <p className={`message-on-screen`}>{message}</p>
      {sender == 'user' && (
        <img src={imageUser} width="100px" height="100px"/>
        )} 
    </div>
  )
}


export default App
