import React, { useEffect, useRef } from "react";

function TerminalInitialOutput(props) {
  const text =
    'Last login: Wed Dec 28 19:34:48 on ttys000\n\nType "help" to see a list of available commands.';

  const initialOutputRef = useRef();

  // As soon as the component renders, animate the initial output with a typewriter effect.
  useEffect(() => {
    // Users should not be allowed to type while the initial output message is still being displayed.
    if (props.inputRef.current) {
      props.inputRef.current.disabled = true;
    }

    // Animate initial output with a typewriter effect.
    let index = 0;
    const textAnimationId = setInterval(() => {
      if (!initialOutputRef.current) {
        return;
      }
      initialOutputRef.current.insertAdjacentText("beforeend", text[index]);
      index++;
      if (index === text.length) {
        // We've reached the end of the initial output text.
        // Cancel the repeating animation.
        clearInterval(textAnimationId);
        // Focus on the terminal input element.
        if (props.inputRef.current) {
          props.inputRef.current.disabled = false;
          props.inputRef.current.focus();
        }
      }
    }, 20);

    // Return a clean-up function to handle the Effect firing multiple times due to React.StrictMode.
    return () => clearInterval(textAnimationId);
  }, [props.inputRef]);

  return (
    <p
      id={
        props.isLastOutputPresent ? "gray-initial-terminal-output" : undefined
      }
      ref={initialOutputRef}
    ></p>
  );
}

export default TerminalInitialOutput;
