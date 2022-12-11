import React from "react";
import { useState, useEffect} from "react";

// type TimerProps = {};
const currTime = 0;

export default function Timer() {
    const [time, setTime] = useState(currTime);
    const [enable, setEnable] = useState(0);
    useEffect(() => {
        const timerId = setInterval(
            () => {if (enable) setTime(time => time + 1)},
            1000
        );
        return () => clearInterval(timerId);
    }, [enable]);
    return <>
        <button onClick={() => setEnable(1)}>Start</button>
        <button onClick={() => setEnable(0)}>Pause</button>
        <span>{time}</span>
    </>
}