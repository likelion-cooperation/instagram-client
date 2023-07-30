import React, { useState } from "react";
import "./HeartButton.css";

function Button({ image1, image2 }) {
    const [Toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        setToggle(prev => !prev);
    }

    return (
        <div onClick={handleClick}>
            {Toggle ? image2 : image1}
        </div>
    )
}

export default Button;