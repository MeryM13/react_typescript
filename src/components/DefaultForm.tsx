import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

export default function DefaultForm() {
    return <>
        <h2>Welcome</h2>
        <Link to="/LoginForm">Login</Link>
        <div/>
        <Link to="/RegistrationForm">Registration</Link>
    </>
}