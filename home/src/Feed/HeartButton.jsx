import React, { useState } from "react";
import IMAGE_HEART_EMPTY from "./img/heart_empty.png"
import IMAGE_HEART_FILLED from "./img/heart_filled.png"
import "./HeartButton.css"

function HeartButton({ label, onChange }) {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        setToggle(prev => !prev);
        onChange?.call(null, toggle);
    }

    return (
        <div onClick={handleClick}>
            <img class="heart" src={toggle ? IMAGE_HEART_FILLED : IMAGE_HEART_EMPTY} style={{ width: "20px", height: "20px" }} alt="" />
            <span>{label}</span>
        </div>
    )
}

function App() {
    return (
        <div>
            <HeartButton />
        </div>
    );
}

export default App;