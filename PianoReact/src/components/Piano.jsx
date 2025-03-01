import React from "react";
import PianoKey from "./PianoKey";
import keyNotes from "../assets/keyNotes";
import "../styles/Piano.css"
import piano from "../assets/piano.mp3";
import useSound from "use-sound";


//Para realizar el componente del piano debemos hacer los siguientes pasoso
/*
    Debemos importar React como en todos nuestros componentes
    Debemos importar las teclas des las que se va a componer nuestro teclado
    Debemos importar el array de keyNotes que contiene la información de las teclas
    Debemos importar el css o estilado del piano, en este caso es la disposicion de las teclas
*/

/*
Explicacion de lo que hay que hacer con Piano.jsx
El piano va a estar compuesto por un div general llamado piano-wrapper y otro div con la clase piano, dentro de este div 
vamos a generar las teclas usando map sobre el array de keyNotes( hemos sabido que es un array al ver
la estructura que tiene )
Para recorrer el array de keyNotes usamos un map y renderizamos un PianoKey por cada
tecla. Accedemos a cada elemento: Nos dice la nota que es, el Type si es blanca o negra y el
grid columns que nos dice la posición que ocupa debemos de poner también key= index para que
react indentifique cada tecla de manera unica
    note: "A0", 
    type: "white",
    gridColumn: "1 / span 4",
    start: 0,
    duration: 49790,

*/

export default function Piano(props){
   
    const spriteMap = keyNotes.reduce((acc, { note, start, duration }) => {
        acc[note] = [start, duration]; 
        return acc;
      }, {});
    
      const [play] = useSound(piano, { sprite: spriteMap });
    
      const handlerPlayNote = (note) => {
        play({id: note});
        props.setNoteHistory((prev) => [note, ...prev.slice(0, 1)]);
      };


    return(
      
            <div className="piano-wrapper">
                <div className="piano">
                    {keyNotes.map((key, index)=>(
                        <PianoKey 
                        key={index} 
                        note={key.note} 
                        type={key.type} 
                        gridColumn ={key.gridColumn} 
                        onPlay={handlerPlayNote} // Pasamos la funcion
                        />))}
                </div>
            </div>
        
    )
}