import React from "react";
import { useState, useEffect} from "react";

function IsPrime(n: number) {
    if (n <= 1)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;

    let i = 3;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0)
            return false;
        i += 2;
    }

    return true;
}

function* PrimeGenerator() {
    let i = 0;
    while (true) {
        i++;
        if (IsPrime(i))
            yield i;
    }
}

export default function PrimesGen() {
    const [text, setText] = useState("");
    const gen = PrimeGenerator();
    useEffect(() => {
        const timerId = setInterval(
            () => {
                setText(text => text + " " + gen.next().value)
            },
            1000
        );
        return () => clearInterval(timerId);
    }, []);
    return <span>{text}</span>;
}