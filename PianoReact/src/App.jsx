import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import './index.css'
import Piano from './components/Piano'
import NoteDisplay from './components/NoteDisplay'



export default function App() {
  const[noteHistory, setNoteHistory]= useState([]);
  
  return (
    <div className='app'>
      <Header  title="Piano App"/>
      <NoteDisplay noteHistory={noteHistory}></NoteDisplay>
      <Piano setNoteHistory ={setNoteHistory}/>
      

    </div>
   
  )
}


