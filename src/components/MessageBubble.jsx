import "./MessageBubble.css";

export function MessageBubble({message, sender}) {
    const imageUser = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
    const imageChatbot = "https://cdn-icons-png.flaticon.com/512/13330/13330989.png"
  
    return (
      <div className={`div-message-${sender}`}>
        {sender == 'chatbot' && (
          <img className="message-avatar" src={imageChatbot} alt="Chatbot"/>
          )} 
        <p className="message-bubble">{message}</p>
        {sender == 'user' && (
          <img className="message-avatar" src={imageUser} alt="User"/>
          )} 
      </div>
    )
  }