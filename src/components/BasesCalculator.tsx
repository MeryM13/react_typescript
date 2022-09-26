import React from "react";
import { useState, useEffect} from "react";

const variants = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

export default function BasesCalculator() {
    const [a, setA] = useState(0);
    const [value, setValue] = useState(2);
    return <>
        <input type={"number"} value={a} onChange={e => setA(Number.parseInt(e.target.value))} />
        в 10-чной системе = {a.toString(value)} в
        <select onChange={e => setValue(Number.parseInt(e.target.value))}>
            {Object.values(variants).map((variant, index) => (
                <option key={index} value={variant}>
                    {variant}
                </option>
            ))}
        </select>-чной системе
    </>;
}