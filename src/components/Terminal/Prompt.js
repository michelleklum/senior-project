function Prompt(props) {
  return (
    <div id="terminal-prompt">
      <p>
        <span id="prompt-user">guest</span>
        <span id="prompt-at">@</span>
        <span id="prompt-domain">michelles-senior-project</span> ~ %
      </p>
      <input
        ref={props.inputRef}
        type="text"
        id="terminal-input"
        name="terminal-input"
        aria-label="Terminal input"
        autoComplete="off"
        value={props.input}
        onChange={(e) => props.setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && props.handleInput()}
      />
    </div>
  );
}

export default Prompt;
