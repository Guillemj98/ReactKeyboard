import React from "react";
import '../styles/Header.css'

export default function Header(props){


    return(
        <>
            <header className="header">
                <h1>{props.title}</h1>
            </header>
        
        
        </>
    )

    
}