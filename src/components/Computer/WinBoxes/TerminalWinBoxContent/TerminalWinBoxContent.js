import "./TerminalWinBoxContent.css";
import React, { useState, useEffect, useRef } from "react";

import TerminalInitialOutput from "./TerminalInitialOutput";
import TerminalPrompt from "./TerminalPrompt";

function TerminalWinBoxContent() {
  const inputRef = useRef();

  const [input, setInput] = useState("");
  const [olderOutput, setOlderOutput] = useState("");
  const [lastOutput, setLastOutput] = useState("");
  const [isLastOutputPresent, setIsLastOutputPresent] = useState(false);

  // Whenever olderOutput state changes (ex: when a user enters input into the terminal),
  // scroll the terminal input element into view so that the user sees the new terminal output,
  // as well as the terminal input element for entering new input.
  useEffect(() => inputRef.current.scrollIntoView(), [olderOutput]);

  // Event handler for when user presses Enter key in the terminal prompt's input box.
  function handleInput() {
    // Include what the user just typed in the new terminal output (lastOutput).
    let newOutput = `guest@michelles-senior-project ~ % ${input}\n`;
    switch (input) {
      case "help":
        newOutput += "Available commands: whoami\n\n[whoami] meet terminal.\n";
        break;
      case "whoami":
        // TODO
        newOutput +=
          "Hello world! I am a computer terminal, otherwise known as a command line interface.\n";
        break;
      default:
        newOutput += `zsh: command not found: ${input}\n`;
    }
    setOlderOutput(olderOutput ? `${olderOutput}\n${lastOutput}` : lastOutput); // Preserve history of all commands input, and all output returned.
    setLastOutput(newOutput);
    setIsLastOutputPresent(true);
    setInput(""); // Clear terminal input state.
  }

  return (
    <div
      id="terminal"
      className="custom-winbox-child"
      onClick={() => inputRef.current.focus()}
    >
      <TerminalInitialOutput
        isLastOutputPresent={isLastOutputPresent}
        inputRef={inputRef}
      />
      <p id="older-terminal-output">{olderOutput}</p>
      <p>{lastOutput}</p>
      <TerminalPrompt
        inputRef={inputRef}
        input={input}
        setInput={setInput}
        handleInput={handleInput}
      />
    </div>
  );
}

export default TerminalWinBoxContent;
