import React, { useEffect, useState } from "react";
import Chatbox from "./Chatbox";
import Reply from "./Reply";

function DialogueWinBoxContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      speaker: "bot",
      text:
        "Meet our new chatbot, powered by ChatGPT and TensorFlow.js - providing personalized responses and helping with your queries.\n\n" +
        'Feel free to ask me any of the following questions: "What is a computer?", "What is ChatGPT?", "What is TensorFlow.js?", and "Why is dialogue important?". I\'d be happy to help!',
    },
  ]);

  // Add new user input to messages array in state.
  function submitUserInput(userInput) {
    setMessages([
      ...messages,
      {
        speaker: "user",
        text: userInput,
      },
    ]);
  }

  // After component renders (which happens if a new User Message or Robot Message is added to the DOM),
  // if the last message was a User Message,
  // call the asynchronous getChatbotResponse function to get the best response to that last message.
  useEffect(() => {
    let lastMessage = messages.at(-1);
    if (lastMessage["speaker"] === "user") {
      getChatbotResponse(lastMessage["text"]);
    }
  });

  // The asynchronous getChatbotResponse function
  // uses the Reply module to get the chatbot's response to some user input.
  async function getChatbotResponse(userInput) {
    // Set isLoading to true to display the bouncing dots ChatLoading component.
    setIsLoading(true);

    await Reply.getChatbotResponse(userInput).then(function (botResponse) {
      // Set isLoading to false to stop displaying the bouncing dots ChatLoading component.
      setIsLoading(false);

      // Add new chatbot response to messages array in state.
      setMessages([
        ...messages,
        {
          speaker: "bot",
          text: botResponse,
        },
      ]);
    });
  }

  return (
    <div className="custom-winbox-child">
      <Chatbox
        messages={messages}
        submitUserInput={submitUserInput}
        isLoading={isLoading}
      />
    </div>
  );
}

export default DialogueWinBoxContent;
