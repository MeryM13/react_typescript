import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {API, BASE_URL} from "../services/querys";

export default function DefaultForm() {

    const [userId,setUserId] = useState(0);
    const [result, setResult] = useState("");
    const [isLogged, setLogged] = useState(false);

    useEffect(() => {
        setLogged(false);
        setUserId(0);
        setResult("");
        const userRequest = async () => {
            try {
                const user = await API.user.get();
                setLogged(true);
                setUserId(user.id);
                setResult(user.login);
            } catch (e) {
            }
        }
        userRequest();
    }, []);

    const handleLogout = () => {
        const logoutRequest = async () => {
            try {
                await API.auth.logout();
                setLogged(false);
                setUserId(0);
                setResult("");
            } catch (e) {
            }
        };
        logoutRequest();
    }

    return (
    <>
        {!isLogged ?
            <>
                <h2>Welcome {result && <>{result}</>}</h2>
                <Link to="/login">Войти</Link>
                <div/>
                <Link to="/registration">Зарегистрироваться</Link>
                <div/>
                <Link to="0/topics/">Продолжить анонимно</Link>
            </>
            : <>
                <Link to={userId.toString()+"/topics/"}>Темы</Link>
                <div/>
                <button onClick={handleLogout}>Выход</button>
            </>
        }
    </>
    )
}
