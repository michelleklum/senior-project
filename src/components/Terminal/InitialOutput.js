import React, { useEffect, useRef } from "react";

function InitialOutput(props) {
  const text =
    'Initializing OS...\n\nLast login: Wed Dec 28 19:34:48 on ttys000\n\nType "help" to see a list of available commands.\nEager to dive in? Type "init" to enter.';

  const initialOutputRef = useRef();

  // As soon as the component renders, animate the initial output with a typewriter effect.
  useEffect(() => {
    // Users should not be allowed to type while the initial output message is still being displayed.
    if (props.inputRef.current) {
      props.inputRef.current.disabled = true;
    }

    // Animate initial output with a typewriter effect.
    let index = 0;
    const typeText = setInterval(() => {
      if (!initialOutputRef.current) {
        return;
      }
      initialOutputRef.current.insertAdjacentText("beforeend", text[index]);
      index++;
      if (index === text.length) {
        // We've reached the end of the initial output text.
        clearInterval(typeText);
        // Focus on the terminal input element.
        if (props.inputRef.current) {
          props.inputRef.current.disabled = false;
          props.inputRef.current.focus();
        }
      }
    }, 20);

    // Return a clean-up function to handle the Effect firing multiple times due to React.StrictMode.
    return () => clearInterval(typeText);
  }, [props.inputRef]);

  return (
    <div
      id={
        props.isLastOutputPresent ? "gray-initial-terminal-output" : undefined
      }
      ref={initialOutputRef}
    ></div>
  );
}

export default InitialOutput;
