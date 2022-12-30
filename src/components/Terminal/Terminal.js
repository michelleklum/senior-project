import "./Terminal.css";
import React, { useState, useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { COMPUTER } from "../../slices/pageStates";
import { changePage } from "../../slices/pageSlice";

function Terminal() {
  const [userInput, setUserInput] = useState("");
  const [olderTerminalOutput, setOlderTerminalOutput] = useState("");
  // TODO: Fix animation on initial terminal output.
  const initialTerminalOutput =
    'Initializing OS...\n\nLast login: Wed Dec 28 19:34:48 on ttys000\n\nType "help" to see a list of available commands.\nEager to dive in? Type "init" to enter.\n'; // TODO
  const [lastTerminalOutput, setLastTerminalOutput] = useState(
    initialTerminalOutput
  );
  const dispatch = useDispatch();

  // As soon as the Terminal component renders, focus on the input element.
  const userInputRef = useRef();
  useEffect(() => {
    userInputRef.current.focus();
  }, []);

  function handleUserInput() {
    // Include past terminal output (olderTerminalOutput), as well as what the user just typed (userInput), and new terminal output (lastTerminalOutput).
    let newTerminalOutput = `guest@michelles-senior-project ~ % ${userInput}\n`;
    switch (userInput) {
      case "init":
        dispatch(changePage(COMPUTER));
        break;
      case "help":
        newTerminalOutput +=
          "Available commands:\ninit\n\n[init] enter website.\n";
        break;
      default:
        newTerminalOutput += `zsh: command not found: ${userInput}\n`;
    }
    setOlderTerminalOutput(`${olderTerminalOutput}\n${lastTerminalOutput}`);
    setLastTerminalOutput(newTerminalOutput);
    setUserInput(""); // Clear user input state.
  }

  return (
    <div id="terminal" onClick={() => userInputRef.current.focus()}>
      <h1>COMPUTER WORLD [TODO: MAKE THIS ASCII ART]</h1>
      <p id="older-terminal-output">{olderTerminalOutput}</p>
      <p id="last-terminal-output">{lastTerminalOutput}</p>
      <div className="terminal-prompt">
        <p>
          <span id="prompt-user">guest</span>
          <span id="prompt-at">@</span>
          <span id="prompt-domain">michelles-senior-project</span> ~ %
        </p>
        <input
          ref={userInputRef}
          type="text"
          id="terminal-input"
          name="terminal-input"
          aria-label="Terminal input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
        />
      </div>
    </div>
  );
}

export default Terminal;
