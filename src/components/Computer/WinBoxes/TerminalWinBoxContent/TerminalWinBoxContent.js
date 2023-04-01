import "./TerminalWinBoxContent.css";
import React, { useState, useEffect, useRef } from "react";

import TerminalInitialOutput from "./TerminalInitialOutput";
import TerminalPrompt from "./TerminalPrompt";

import { DESKTOP_APPS_FILES } from "../../Desktop/DesktopAppsFiles";

import { useSelector } from "react-redux";
import { selectWinBoxStates } from "../../../../slices/winBoxSlice";
import { OPEN } from "../../../../slices/winBoxStates";

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

  // Once the component is rendered, focus on the input element.
  const winBoxStates = useSelector(selectWinBoxStates);

  useEffect(() => {
    inputRef.current.focus();
  }, [winBoxStates]);

  // Also need WinBox states to display running processes for the Terminal's top command.
  const openWinBoxes = Object.entries(winBoxStates).filter(
    ([_, v]) => v === OPEN
  );

  // Event handler for when user presses Enter key in the terminal prompt's input box.
  function handleInput() {
    // Include what the user just typed in the new terminal output (lastOutput).
    let newOutput = `guest@michelles-senior-project desktop % ${input}\n`;
    switch (input) {
      case "help":
        newOutput +=
          "Available commands:\n" +
          "ls, pwd, top, whoami\n\n" +
          "[ls]     list files and directories.\n" +
          "[pwd]    print working directory.\n" +
          "[top]    display running processes and CPU usage.\n" +
          "[whoami] meet terminal.";
        break;
      case "ls":
        // Display all apps and files on the desktop.
        newOutput += DESKTOP_APPS_FILES.map(([k, _]) => `${k}\n`).join("");
        break;
      case "pwd":
        newOutput += "/Users/guest/desktop";
        break;
      case "top":
        newOutput +=
          `Processes: 521 total, ${openWinBoxes.length} running, 518 sleeping, 2781 threads\n` +
          "Load Avg: 4.96, 7.44, 9.35  CPU usage: 43.29% user, 5.85% sys, 50.84% idle\n" +
          "SharedLibs: 231M resident, 39M data, 12M linkedit.\n" +
          "MemRegions: 529376 total, 2216M resident, 40M private, 799M shared.\n" +
          "PhysMem: 8127M used (2503M wired), 63M unused.\n" +
          "VM: 53T vsize, 3152M framework vsize, 27511312(504) swapins, 29583591(0) swapout\n" +
          "Networks: packets: 5496588/3294M in, 2499381/1030M out.\n" +
          "Disks: 7610870/186G read, 3721143/148G written.\n\n";

        // Display running processes. There will be one running process per open WinBox.
        if (openWinBoxes.length > 0) newOutput += "PID    COMMAND\n";
        newOutput += openWinBoxes
          .map(
            ([k, _], i) => `${i}${" ".repeat(7 - i.toString().length)}${k}\n`
          )
          .join("");
        break;
      case "whoami":
        newOutput +=
          "Hello world!\n\n" +
          'I am Terminal, otherwise known as the Command Line Interface. I am a text-based way of navigating your computer\'s operating system. I originated from teletype technology that was initially used to send and receive telegrams in the 19th century. Later, when computers emerged, teletypes became one of the first computer interfaces. Programmers used teletypes to send and receive lines of text to and from a computer, "producing, over time, a transcript of [their] exchange with the machine" (Stephenson 6).\n\n' +
          "So, it seems that computation and communication have been inseparable from the start.\n";
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
