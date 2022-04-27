import React, { useState } from "react";
import "./EightBall.css";


const EightBall = (arr) => {
    const genRandom = () => {
        return Math.floor(Math.random() * arr.length);
    };
    const startState = () => {
        setState(genRandom());
    }
    const shakeState = (props) => {
        const [msg, setMsg] = useState("Think of a Question");
        const [color, setColor] = useState("black");
    }
    const handleClick() {
        const { msg, color } = choice(props)
    }
}

export { EightBall };