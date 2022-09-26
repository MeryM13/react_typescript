import React from "react";

type SquareProps = {n: number;}

export default function Square({n} : SquareProps) {
    return <>{n*n}</>;
}