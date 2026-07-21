

function App() {


  return (
    <>
      <QuestionBar />
      <MessageOnScreen message="Hello, I am a chatbot. How can I help you today?" sender="chatbot"/>
      <MessageOnScreen message="I am a user. I want to know about the weather in Tokyo." sender="user"/>
    </>
  )
}

function QuestionBar() {
  const message = "Please enter your question for the chat"
  return ( 
    <>
      <input
        type="text"
        placeholder={message}
      />
      <button type="submit">Submit</button>
    </>
  )
}


function MessageOnScreen({message, sender}) {
  const imageUser = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  const imageChatbot = "https://cdn-icons-png.flaticon.com/512/13330/13330989.png"

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {sender == "chatbot" ? <img src={imageChatbot} width="100px" height="100px"/> : null} 
      <p>{message}</p>
      {sender == "user" ? <img src={imageUser} width="100px" height="100px"/> : null }   
    </div>
  )
}


export default App