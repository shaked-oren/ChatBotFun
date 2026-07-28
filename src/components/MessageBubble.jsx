
export function MessageBubble({message, sender}) {
    const imageUser = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    const imageChatbot = "https://cdn-icons-png.flaticon.com/512/13330/13330989.png"
  
    return (
      <div className={`div-message-${sender}`} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {sender == 'chatbot' && (
          <img src={imageChatbot} width="50px" height="50px"/>
          )} 
        <p className="message-bubble">{message}</p>
        {sender == 'user' && (
          <img src={imageUser} width="50px" height="50px"/>
          )} 
      </div>
    )
  }