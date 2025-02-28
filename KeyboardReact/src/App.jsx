import React from 'react'
import './App.css'
import Header from './components/Header'
import './index.css'
import Piano from './components/Piano'
import { useState } from 'react'

export default function App() {
  const[noteHistory, setNoteHistory] = useState("");
  
  return (
    <div className='app'>
      <Header title="Piano App"/>
      <div className='imagen__nota'>
        <p className='imagen__nota-anterior'></p>
        <p className='imagen__nota-actual'></p>

      </div>
      <Piano/>
      

    </div>
   
  )
}


