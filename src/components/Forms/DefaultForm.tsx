import React from "react";
import {Link} from "react-router-dom";
import Header from "../elements/header";

export default function DefaultForm() {
    return <>
        <h2>Welcome</h2>
        <Link to="/LoginForm">Войти</Link>
        <div/>
        <Link to="/RegistrationForm">Зарегистрироваться</Link>
        <div/>
        <Link to="/TopicsForm/0">Продолжить анонимно</Link>
        <div/>
        <Link to="/Control">Контрольная</Link>
    </>
}
