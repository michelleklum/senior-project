import React, { useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { COMPUTER } from "../../slices/pageStates";
import { changePage } from "../../slices/pageSlice";

import InitialOutput from "./InitialOutput";
import Prompt from "./Prompt";

function Terminal() {
  const title =
    " _______  _______  __   __  _______  __   __  _______  _______  ______      _     _  _______  ______    ___      ______ \n" +
    "|       ||       ||  |_|  ||       ||  | |  ||       ||       ||    _ |    | | _ | ||       ||    _ |  |   |    |      | \n" +
    "|       ||   _   ||       ||    _  ||  | |  ||_     _||    ___||   | ||    | || || ||   _   ||   | ||  |   |    |  _    | \n" +
    "|       ||  | |  ||       ||   |_| ||  |_|  |  |   |  |   |___ |   |_||_   |       ||  | |  ||   |_||_ |   |    | | |   | \n" +
    "|      _||  |_|  ||       ||    ___||       |  |   |  |    ___||    __  |  |       ||  |_|  ||    __  ||   |___ | |_|   | \n" +
    "|     |_ |       || ||_|| ||   |    |       |  |   |  |   |___ |   |  | |  |   _   ||       ||   |  | ||       ||       | \n" +
    "|_______||_______||_|   |_||___|    |_______|  |___|  |_______||___|  |_|  |__| |__||_______||___|  |_||_______||______| \n";

  const inputRef = useRef();

  const [input, setInput] = useState("");
  const [olderOutput, setOlderOutput] = useState("");
  const [lastOutput, setLastOutput] = useState("");
  const [isLastOutputPresent, setIsLastOutputPresent] = useState(false);

  const dispatch = useDispatch();

  // Event handler for when user presses Enter key in the terminal prompt's input box.
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
      <h1 id="terminal-title">{title}</h1>
      <InitialOutput
        isLastOutputPresent={isLastOutputPresent}
        inputRef={inputRef}
      />
      <p id="older-terminal-output">{olderOutput}</p>
      <p>{lastOutput}</p>
      <Prompt
        inputRef={inputRef}
        input={input}
        setInput={setInput}
        handleInput={handleInput}
      />
    </div>
  );
}

export default Terminal;
