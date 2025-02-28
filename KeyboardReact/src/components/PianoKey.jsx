import React from "react";
import "../styles/PianoKey.css"
import { useState } from "react";


/*
Vamos a determinar que necesitamos coger para la parte estaica de nuestro piano
-Necesitamos saber que tipo de nota es para pintarla encima de la tecla y para pintarla en la parte de arriba
-Necesitamos el type para aplicar los diferentes tipo de css segun sea blancas o negras
-Necesitamos el grid column para saber como debemos posicionarlas dentro del grid 
-Vamos a asiganr de manera dinamica el nombre de la clase para que diferencia entre blanca y negra
className={`piano-key ${props.type}`
La alternativa seria la siguiente:
--className={key.type === 'white' ? 'piano-key white' : 'piano-key black'}


Vamos a determinar que necesitamos para la parte dinamica de nuestro teclado
-Necesitamos start
-Necesitamos duration
*/ 
export default function PianoKey(props){
    const [isPressed, setIsPressed]= useState(false);

    const handlerMouseDown = ()=>{
        setIsPressed(true);
    }
    const handlerMouseUp = ()=>{
        setIsPressed(false);
    }
    const handlerMouseLeave = ()=>{
        setIsPressed(false);
    }



    return(
        <div className={`piano-key piano-key__${props.type} ${isPressed ? (props.type === "white" ? "piano-key--active-white" : "piano-key--active-black") : ""}`} 
        style={{gridColumn : props.gridColumn}}
        onMouseDown={handlerMouseDown}
        onMouseLeave={handlerMouseUp}
        onMouseUp={handlerMouseLeave}
        
        >
            <div className="piano-key__name">
                {props.note}
            </div>
        </div>
    )
}