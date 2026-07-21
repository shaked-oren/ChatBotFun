

function App() {


  return (
    <>
      <QuestionBar />
      <MessageOnScreen message="Hello, I am a chatbot. How can I help you today?"/>
      <MessageOnScreen message="I am a user. I want to know about the weather in Tokyo."/>
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


function MessageOnScreen(message) {
  const image = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={image} width="100px" height="100px"/>
      <p>{message.message}</p>
    </div>
  )
}

export default App