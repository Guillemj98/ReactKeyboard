// NoteDisplay.js
import React from 'react';
import '../styles/NoteDisplay.css'; 

const NoteDisplay = (props) => {
  return (
    <div className="note-display">
      <p className='previousNote'> {props.noteHistory.length > 1 ? props.noteHistory[1] : " "}</p>
      <p className='currentNote'> {props.noteHistory.length > 0 ? props.noteHistory[0] : " "}</p>
      
    </div>
  );
};

export default NoteDisplay;
