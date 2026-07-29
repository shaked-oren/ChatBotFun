import { useState } from "react";
import "./MessageInput.css";

export function MessageInput({ messageList, setMessageList }) {
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
  
  