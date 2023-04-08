function CurrentNote(props) {
  function placeCursorAtEndOfValueOnFocus(e) {
    const val = e.target.value;
    e.target.value = "";
    e.target.value = val;
  }

  return (
    <div id="curr-note">
      <textarea
        className="note-title"
        rows={props.titleTextareaRows}
        name="curr-note-title"
        value={props.notes.find((note) => note.id === props.currNoteId).title}
        onChange={props.handleCurrNoteTitleChange}
        autoComplete="off"
        ref={props.titleTextareaRef}
        onFocus={function (e) {
          placeCursorAtEndOfValueOnFocus(e);
          props.handleTitleTextareaChange(e);
        }}
      ></textarea>
      <textarea
        rows={props.contentTextareaRows}
        name="curr-note-content"
        value={props.notes.find((note) => note.id === props.currNoteId).content}
        onChange={props.handleCurrNoteContentChange}
        autoComplete="off"
        ref={props.contentTextareaRef}
        onFocus={function (e) {
          placeCursorAtEndOfValueOnFocus(e);
          props.handleContentTextareaChange(e);
        }}
      ></textarea>
    </div>
  );
}

export default CurrentNote;
