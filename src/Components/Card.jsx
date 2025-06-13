import React, { useState } from "react";
import Button from "./Button";
import "./Card.css";

function Card() {
    const [visibleData, setVisibleData] = useState(false);
    const handleClick = () => setVisibleData(!visibleData);
    const [name, setName]  = useState("G. Biffi");

    function HandleName(event) {
        setName(event.target.value);
    }

    return (
        <div className="card-container">
            <button id="toggleVisibility" onClick={HandleName}>
                {visibleData 
                ? "Nascondi"
                : "Mostra"
                }
            </button>
            {visibleData
            ? <Button><input type="text" value={name} onChange={changeName}/></Button>
            : <h1>Click to show the buttons</h1>}
        </div>
    )
}

export default Card;