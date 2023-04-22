import moment from "moment";

function NotePreview(props) {
  const oneDayAgo = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const daysOfTheWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  function getDisplayDate(date) {
    // Note last modified...
    if (date.getTime() > oneDayAgo.getTime()) {
      // In the last 24 hours. Display date in HH:MM AM/PM format.
      return moment(date.getHours() + ":" + date.getMinutes(), "HH:mm").format(
        "h:mm A"
      );
    }

    if (date.getTime() > sevenDaysAgo.getTime()) {
      // In the last week. Display date by day of the week.
      return daysOfTheWeek[date.getDay()];
    }

    // More than 1 week ago. Display date in MM/DD/YYYY format.
    return date.toLocaleDateString();
  }

  return (
    <button
      key={props.id}
      id={props.id === props.currNoteId ? "selected-note" : undefined}
      className="note-preview-button"
      onClick={() => props.setCurrNoteId(props.id)}
    >
      <p className="note-title-preview">
        {props.title
          ? props.title.length > 25
            ? props.title.slice(0, 24) + "..."
            : props.title
          : "New Note"}
      </p>
      <div className="note-date-content-preview">
        <p>{getDisplayDate(props.date)}</p>
        <p>
          {props.content
            ? props.content.length > 15
              ? props.content.slice(0, 14) + "..."
              : props.content
            : "No additional text"}
        </p>
      </div>
    </button>
  );
}

export default NotePreview;
