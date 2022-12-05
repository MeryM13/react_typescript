import React from "react";
import { useState, useEffect} from "react";

let BitArray : React.ReactElement[];

function square(is1:boolean)
{
    return is1? <div className = "black_square"/>: <div className = "white_square"/>;
}

function ToBits(n: number) {
    if (n) {
        //let returnStr = "";
        BitArray = [];
        let str = n.toString(2);
        for (let char of str) {
            //returnStr += (char === "1"? "■ " : "□ ");
            BitArray.push(square(char === "1"));
        }
        return BitArray;
    }
}

export default function BitNumber()
{
    const [number, setNumber] = useState(0);
    return <>
        <input type={"number"} value={number} onChange={e => setNumber(Number.parseInt(e.target.value))} />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        {ToBits(number)}
        </div>
    </>
}