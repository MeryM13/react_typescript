import React from "react";
import { useState, useEffect} from "react";

type BackTimerProps = {n: number};

export default function BackwardsTimer({n}: BackTimerProps) {
    const [time, setTime] = useState(n);
    useEffect(() => {
        const timerId = setInterval(
            () => {
                    setTime(time => time > 0 ? time - 1 : 0)
            },
            1000
        );
        return () => clearInterval(timerId);
    }, []);
    return <span>{time}</span>;
}