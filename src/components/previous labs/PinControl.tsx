import React, { useState} from "react";

type ButtonArrayProps = {
    onNumberButtonClick: (n: string) => void,
    onCancelButtonClick: () => void,
    onEnterButtonClick: () => void
}

function ButtonArray({onNumberButtonClick, onCancelButtonClick, onEnterButtonClick}:ButtonArrayProps) {
    const buttonArray = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["cancel", "0", "enter"]];

    type NumberButtonProps = {
        n: string;
    }

    function NumberButton({n}: NumberButtonProps) {
        return <td>
            <button onClick={e => onNumberButtonClick(n)}>{n}</button>
        </td>
    }

    function CancelButton() {
        return <td>
            <button onClick={onCancelButtonClick}>cancel</button>
        </td>
    }

    function EnterButton() {
        return <td>
            <button onClick={onEnterButtonClick}>enter</button>
        </td>
    }

    return <>
        {buttonArray.map(row => <tr>{row.map(function (name) {
            if (name === "cancel")
                return <CancelButton/>;
            if (name === "enter")
                return <EnterButton/>;
            return <NumberButton n={name}/>
        })}</tr>)}
    </>
}

export default function PinControl() {
    const [pin, setPin] = useState("");
    const [message, setMessage] = useState("");

    function rewritePin(n: string) {
        if (pin.length < 4) {
            setPin(pin + n.toString());
        } else {
            setPin(pin.slice(1) + n.toString());
        }
        setMessage("");
    }

    function erasePin() {
        setPin("");
        setMessage("");
    }

    function handleSubmit() {
        if (pin === "9999") {
            setMessage("Правильный пин-код!")
        } else {
            setMessage("Неправильно");
        }
    }

    return <>
        <table>
            <tr>
                <td colSpan={3}>
                    <input value={pin} disabled/>
                </td>
            </tr>
            <ButtonArray onNumberButtonClick={rewritePin} onCancelButtonClick={erasePin} onEnterButtonClick={handleSubmit}/>
            <tr>
                <td colSpan={3}>
                    {message}
                </td>
            </tr>
        </table>
    </>
}