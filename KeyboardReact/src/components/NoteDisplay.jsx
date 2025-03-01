// NoteDisplay.js
import React from 'react';
import '../styles/NoteDisplay.css'; 

const NoteDisplay = (props) => {
  return (
    <div className="note-display">
      <p>Actual: {props.noteHistory[0] || "-"}</p>
      <p>Anterior: {props.noteHistory[1] || "-"}</p>
    </div>
  );
};

export default NoteDisplay;
