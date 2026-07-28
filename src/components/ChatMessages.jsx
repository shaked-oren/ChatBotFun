import { useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";

export function ChatMessages({ messageList }) {
    const messageContainerRef = useRef(null);
    useEffect(() => {
      const containerElement = messageContainerRef.current;
      if (containerElement) {
        containerElement.scrollTop = containerElement.scrollHeight;
      }
    }, [messageList]);
    return (
      <div className="messages-container" ref={messageContainerRef}>
        {messageList.map((message) => (
          <MessageBubble key={message.id} message={message.message} sender={message.sender}/>
        ))}
      </div>
    );
  } 