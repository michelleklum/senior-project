import React, { useEffect, useRef } from "react";

import "./Chatbox.css";

import RobotMessage from "./RobotMessage";
import UserMessage from "./UserMessage";
import ChatLoading from "./ChatLoading";
import UserInput from "./UserInput";

function Chatbox(props) {
  // When new messages are added, chatbox should automatically scroll to bottom (to show most recent message).
  const messagesRef = useRef();

  useEffect(() => {
    let el = messagesRef.current;
    el.scrollTop = el.scrollHeight;
  });

  return (
    <div id="chatbox">
      <div id="messages" ref={messagesRef}>
        {props.messages.map((message) => {
          return message.speaker === "bot" ? (
            <RobotMessage
              key={props.messages.indexOf(message)}
              message={message.text}
            />
          ) : (
            <UserMessage
              key={props.messages.indexOf(message)}
              message={message.text}
            />
          );
        })}
        {props.isLoading && <ChatLoading />}
      </div>
      <UserInput submitUserInput={props.submitUserInput} />
    </div>
  );
}

export default Chatbox;
