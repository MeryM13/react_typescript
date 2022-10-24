import React from "react";
import {Link} from "react-router-dom";

export default function DefaultForm() {
    return <>
        <h2>Welcome</h2>
        <Link to="/LoginForm">Login</Link>
        <div/>
        <Link to="/RegistrationForm">Registration</Link>
        <div/>
        <Link to="/QueryForm">Query</Link>
    </>
}