import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function DefaultForm() {
    useEffect(() => {
        //copy request from registration, method GET, add credentials: "include"
    }, []);
    return <>
        <h2>Welcome</h2>
        <Link to="/login">Войти</Link>
        <div/>
        <Link to="/registration">Зарегистрироваться</Link>
        <div/>
        <Link to="/topics/0">Продолжить анонимно</Link>
    </>
}
