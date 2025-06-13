import React, {useState} from "react";
import "./Button.css";

function Button(props) {
    const [count, setCount] = useState(0);
    const handleClickIncrement = () => setCount(count + 1);
    const handleClickDecrement = () => count > 0 ? setCount(count - 1) : null;


    return(
        <div className="button-container">
            {props.children
            ? props.children
            : null}
            <h2>Maledizioni: {count}</h2>
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    )
}

export default Button;