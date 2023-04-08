import NotePreview from "./NotePreview";

function NotesSidebar(props) {
  return (
    <div id="notes-sidebar">
      <div id="all-notes">
        {props.notes
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(({ id, title, content, date }) => (
            <NotePreview
              key={id}
              currNoteId={props.currNoteId}
              setCurrNoteId={props.setCurrNoteId}
              id={id}
              title={title}
              content={content}
              date={date}
            />
          ))}
      </div>
      <button
        id="add-note-button"
        className="custom-button"
        onClick={props.handleAddNote}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default NotesSidebar;
