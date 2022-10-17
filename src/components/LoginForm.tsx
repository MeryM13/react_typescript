import React, {FormEvent} from "react";
import {useState} from "react";

export default function LoginForm() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [repeat, setRepeat] = useState("");
    const [repeatError,setRepeatError] = useState("");

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        setPasswordError("");
        setRepeatError("");
        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        if (!/([a-z0-9]{6,20})/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }

        if (repeat.length === 0) {
            setRepeatError("Повтор пароля не может быть пустым.");
            result = false;
        }

        if (password !== repeat) {
            setRepeatError("Пароль и повтор пароля должны совпадать.");
            result = false;
        }

        return result;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid()) {
            // отправка данных на сервер
        }
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Логин:
                    <input value={login} onChange={e => setLogin(e.target.value)}/>
                </label>
                {loginError && <div className="error">
                    {loginError}
                </div>}
            </div>
            <div>
                <label>Пароль:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                {passwordError && <div className="error">
                    {passwordError}
                </div>}
            </div>
            <div>
                <label>Повторите пароль:
                    <input type="password" value={repeat} onChange={e => setRepeat(e.target.value)}/>
                </label>
                {repeatError && <div className="error">
                    {repeatError}
                </div>}
            </div>
            <button type="submit">Войти</button>
        </form>
    </>;
}