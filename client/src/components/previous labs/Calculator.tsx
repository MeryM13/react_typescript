import React from "react";
import { useState, useEffect} from "react";

const variants = {
    ADD: '+',
    SUBSTRACT: '-',
    DIVIDE: '/',
    MULTIPLY: '*'
};

type CalculateProps = {a: number,
b: number,
func: string}

function Calculate({a,b,func}: CalculateProps) {
    switch (func) {
        case variants.ADD: {
            return (a + b).toString();
        }
        case variants.SUBSTRACT: {
            return (a - b).toString();
        }
        case variants.DIVIDE: {
            return (a / b).toString();
        }
        case variants.MULTIPLY : {
            return (a * b).toString();
        }
        default: {
            return "error";
        }
    }
}

export default function Calculator(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [value, setValue] = useState("+");
    return <>
        <input type={"number"} value={a} onChange={e => setA(Number.parseInt(e.target.value))} />
        <select onChange={e => setValue(e.target.value)}>
            {Object.values(variants).map((variant, index) => (
                <option key={index} value={variant}>
                    {variant}
                </option>
            ))}
        </select>
        <input type={"number"} value={b} onChange={e => setB(Number.parseInt(e.target.value))} />
        = {Calculate({a,b,func:value})}
        </>;
}