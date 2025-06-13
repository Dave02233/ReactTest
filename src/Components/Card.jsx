import React, { useState } from "react";
import Button from "./Button";
import "./Card.css";

function Card() {
    const [visibleData, setVisibleData] = useState(false);
    const [name, setName]  = useState("G. Biffi");
    const [inputDisabled, setInputDisabled] = useState(false);


    function handleClick() {
        setVisibleData(!visibleData);
    } 
    
    function handleName(event) {
        setName(event.target.value);
    }
    function handleEnded() {
        setInputDisabled(true);
    }

    return (
        <div className="card-container">
            <button id="toggleVisibility" onClick={handleClick}>
                {visibleData 
                ? "Reset"
                : "Mostra"
                }
            </button>
            {visibleData
            ? <Button>
                {visibleData && (
                    <input
                        type="text"
                        value={name}
                        onChange={handleName}
                        onBlur={handleEnded}
                        onKeyDown={e => e.key === "Enter" ? handleEnded() : null}
                        disabled={inputDisabled}
                    />
                )}
            </Button>
            : <h1>Clicca per mostrare il conteggio</h1>}
        </div>
    )
}

export default Card;