import React, { useState } from "react";
import "./UserInput.css";

function UserInput(props) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleOnKeyDown(e) {
    // Listen for Enter key.
    if (e.keyCode === 13) {
      e.preventDefault(); // Prevent page from refreshing on submit using enter key.
      submitUserInput();
    }
  }

  function submitUserInput() {
    props.submitUserInput(userInput);
    setUserInput(""); // Clear input area after submitting user input.
  }

  return (
    <div id="user-input-box" onSubmit={submitUserInput}>
      <input
        type="text"
        name="user-input"
        id="user-input"
        placeholder="chat with me!"
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
        value={userInput}
        autocomplete="off"
      ></input>
      <i
        id="user-input-arrow"
        className="fas fa-chevron-circle-right fa-2x"
        onClick={submitUserInput}
      ></i>
    </div>
  );
}

export default UserInput;
