import React from "react";

type TemperatureProps = {t:number;}

export default function Temperature({t}: TemperatureProps){
    let clr = "grey";
    if (t<0)
        clr = "blue";
    if (t>0)
        clr="red";
    return <div style={{color: clr}}>{t}</div>
}
