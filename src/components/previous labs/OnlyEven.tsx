import React from "react";

type OnlyEvenProps = {arr:number[];}

export default function OnlyEven({arr}: OnlyEvenProps){
    return <ul>
        {arr.filter(item => item % 2 === 0).map((item, index) => <li key={index}>{item}</li>)}
    </ul>;
}