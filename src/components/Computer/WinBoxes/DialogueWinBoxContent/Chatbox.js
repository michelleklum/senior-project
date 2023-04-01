import React, { useEffect, useRef } from "react";

import "./Chatbox.css";

import RobotMessage from "./RobotMessage";
import UserMessage from "./UserMessage";
import ChatLoading from "./ChatLoading";
import UserInput from "./UserInput";

import { useSelector } from "react-redux";
import { selectWinBoxStates } from "../../../../slices/winBoxSlice";

function Chatbox(props) {
  // When new messages are added, chatbox should automatically scroll to bottom (to show most recent message).
  const messagesRef = useRef();

  useEffect(() => {
    let el = messagesRef.current;
    el.scrollTop = el.scrollHeight;
  });

  // Once the component is rendered, focus on the input element.
  const winBoxStates = useSelector(selectWinBoxStates);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [winBoxStates]);

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
      <UserInput inputRef={inputRef} submitUserInput={props.submitUserInput} />
    </div>
  );
}

export default Chatbox;
