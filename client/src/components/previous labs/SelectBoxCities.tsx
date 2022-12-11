import React from "react";
import { useState} from "react";

const variants = ['Рио-де-Жанейро', 'Москва', 'Воронеж'];

export default function SelectCity() {
    const [value, setValue] = useState(0);
    return <>
        <select onChange={e => setValue(Number.parseInt(e.target.value))}>
            {variants.map((variant, index) => (
                <option key={index} value={index}>
                    {variant}
                </option>
            ))}
        </select>
        <div>{variants[value] === "Рио-де-Жанейро" ? "" : "Нет, это не Рио-де-Жанейро!"}</div>
    </>;
}
