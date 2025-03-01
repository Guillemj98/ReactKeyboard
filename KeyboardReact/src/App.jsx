import React from 'react'
import './App.css'
import Header from './components/Header'
import './index.css'
import Piano from './components/Piano'
import NoteDisplay from './components/NoteDisplay'


export default function App() {
 
  
  return (
    <div className='app'>
      <Header title="Piano App"/>
      
      <Piano/>
      

    </div>
   
  )
}


