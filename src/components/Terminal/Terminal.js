import "./Terminal.css";
import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { COMPUTER } from "../../slices/pageStates";
import { changePage } from "../../slices/pageSlice";

import InitialOutput from "./InitialOutput";

function Terminal() {
  const [input, setInput] = useState("");
  const [olderOutput, setOlderOutput] = useState("");
  const [lastOutput, setLastOutput] = useState("");
  const [isLastOutputPresent, setIsLastOutputPresent] = useState(false);
  const dispatch = useDispatch();

  const inputRef = useRef();

  // Event handler for when user presses Enter key in the input box.
  function handleInput() {
    // Include what the user just typed in the new terminal output (lastOutput).
    let newOutput = `guest@michelles-senior-project ~ % ${input}\n`;
    switch (input) {
      case "init":
        dispatch(changePage(COMPUTER));
        break;
      case "help":
        newOutput += "Available commands:\ninit\n\n[init] enter website.\n";
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
    <div id="terminal" onClick={() => inputRef.current.focus()}>
      <h1 id="terminal-title-glow">
        COMPUTER WORLD [TODO: MAKE THIS ASCII ART]
      </h1>
      <InitialOutput
        isLastOutputPresent={isLastOutputPresent}
        inputRef={inputRef}
      />
      <p id="older-terminal-output">{olderOutput}</p>
      <p>{lastOutput}</p>
      <div id="terminal-prompt">
        <p>
          <span id="prompt-user">guest</span>
          <span id="prompt-at">@</span>
          <span id="prompt-domain">michelles-senior-project</span> ~ %
        </p>
        <input
          ref={inputRef}
          type="text"
          id="terminal-input"
          name="terminal-input"
          aria-label="Terminal input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleInput()}
        />
      </div>
    </div>
  );
}

export default Terminal;
