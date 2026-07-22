import { useState } from "react";

const initialMessages = [
  {
    message: "Hello, I am a chatbot. How can I help you today?",
    sender: "chatbot",
    id: 1
  },
  {
    message: "I am a user. I want to know about the weather in Tokyo.",
    sender: "user",
    id: 2
  }
];

function App() {
  const [messageList, setMessageList] = useState(initialMessages);

  return (
    <>
      <QuestionBar setMessageList={setMessageList} />
      <AllMessages messageList={messageList} />
    </>
  )
}

function QuestionBar({ setMessageList }) {
  const message = "Please enter your question for the chat"

  function handleSubmit() {
    setMessageList(prev => [...prev, {
      message: "Test ",
      sender: "user",
      id: crypto.randomUUID()
    }]);
  }

  return ( 
    <>
      <input
        type="text"
        placeholder={message}
      />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </>
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
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {sender == 'chatbot' && (
        <img src={imageChatbot} width="100px" height="100px"/>
        )} 
      <p>{message}</p>
      {sender == 'user' && (
        <img src={imageUser} width="100px" height="100px"/>
        )} 
    </div>
  )
}


export default App
