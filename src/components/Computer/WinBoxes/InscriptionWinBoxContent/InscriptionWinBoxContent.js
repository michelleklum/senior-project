import "./InscriptionWinBoxContent.css";
import NotesSidebar from "./NotesSidebar";
import CurrentNote from "./CurrentNote";

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectWinBoxStates } from "../../../../slices/winBoxSlice";

import { v4 as uuidv4 } from "uuid";

function InscriptionWinBoxContent() {
  // State to track the currently selected note.
  const [currNoteId, setCurrNoteId] = useState(uuidv4());

  // State to track all notes.
  // Note that in the JavaScript Date object, the month is 0-indexed.
  const [notes, setNotes] = useState([
    {
      id: currNoteId,
      title: "COMMUNICATION",
      content:
        'We can view "communication as the process of writing directly on the soul of the other..."\n\n-- from The Interface Effect, Alexander R. Galloway',
      date: new Date(Date.now()),
    },
    {
      id: uuidv4(),
      title: "INSCRIPTION",
      content:
        'Much of the modern terminology surrounding computing finds its roots in literature, corroborating Dennis Tenen\'s observation that...\n\n"cardinal literary-theoretical concepts, such as word, text, narrative, discourse, author, story, book, and archive, are thoroughly enmeshed in the underlying physical substratum of... pixel"\n\n-- from Plain Text, Dennis Tenen.\n\nFor example:\n\n"CD-ROM drives are laser optical devices that read and write their data... rendering the physical phenomena of pits and lands both visible and legible (though not to human eyes), thereby restoring this post-alphabetic writing practice to recognizable registers of inscription."\n\n-- from Mechanisms, Matthew Kirschenbaum.',
      date: new Date(2023, 3, 7, 2, 42, 42),
    },
    {
      id: uuidv4(),
      title:
        "So... what do you think? What's a computer? What's a human? How do you interact with computers?",
      content: "Leave your thoughts below...",
      date: new Date(2023, 3, 2, 2, 42, 42),
    },
  ]);

  // Once the component is rendered and/or the current note changes,
  // adjust the current note's title textarea and content textarea to have the right number of rows to display the initial input,
  // and focus on the content textarea of the current note.
  const winBoxStates = useSelector(selectWinBoxStates);
  const titleTextareaRef = useRef();
  const contentTextareaRef = useRef();

  useEffect(() => {
    titleTextareaRef.current.focus();
    contentTextareaRef.current.focus();
  }, [winBoxStates, currNoteId]);

  // Code below is necessary for automatically resizing textareas according to their scrollHeights.
  const [titleTextareaRows, setTitleTextareaRows] = useState(1);
  const [contentTextareaRows, setContentTextareaRows] = useState(1);

  function computeTextareaRowsRequired(e) {
    const rowHeight = 15;
    const textareaRowsRequired =
      Math.ceil(e.target.scrollHeight / rowHeight) - 1;
    return textareaRowsRequired;
  }

  function handleTitleTextareaChange(e) {
    const textareaRowsRequired = computeTextareaRowsRequired(e);
    if (textareaRowsRequired > titleTextareaRows) {
      setTitleTextareaRows(textareaRowsRequired);
    }
  }

  function handleContentTextareaChange(e) {
    const textareaRowsRequired = computeTextareaRowsRequired(e);
    if (textareaRowsRequired > contentTextareaRows) {
      setContentTextareaRows(textareaRowsRequired);
    }
  }

  function handleCurrNoteTitleChange(e) {
    let currNote = notes.find((note) => note.id === currNoteId);
    currNote.title = e.target.value;
    currNote.date = new Date(Date.now());

    setNotes([...notes.filter((note) => note.id !== currNoteId), currNote]);
    handleTitleTextareaChange(e);
  }

  function handleCurrNoteContentChange(e) {
    let currNote = notes.find((note) => note.id === currNoteId);
    currNote.content = e.target.value;
    currNote.date = new Date(Date.now());

    setNotes([...notes.filter((note) => note.id !== currNoteId), currNote]);
    handleContentTextareaChange(e);
  }

  // Code below is necessary for adding a new note.
  function handleAddNote() {
    let newCurrNoteId = uuidv4();
    let currNote = {
      id: newCurrNoteId,
      title: "",
      content: "",
      date: new Date(Date.now()),
    };

    setNotes([...notes, currNote]);
    setCurrNoteId(newCurrNoteId);
  }

  return (
    <div id="inscription" className="custom-winbox-child">
      <NotesSidebar
        notes={notes}
        currNoteId={currNoteId}
        setCurrNoteId={setCurrNoteId}
        handleAddNote={handleAddNote}
      />
      <CurrentNote
        notes={notes}
        currNoteId={currNoteId}
        titleTextareaRows={titleTextareaRows}
        contentTextareaRows={contentTextareaRows}
        handleCurrNoteTitleChange={handleCurrNoteTitleChange}
        handleCurrNoteContentChange={handleCurrNoteContentChange}
        titleTextareaRef={titleTextareaRef}
        contentTextareaRef={contentTextareaRef}
        handleTitleTextareaChange={handleTitleTextareaChange}
        handleContentTextareaChange={handleContentTextareaChange}
      />
    </div>
  );
}

export default InscriptionWinBoxContent;
