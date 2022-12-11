import React from 'react';
import LoginForm, {LoginFormData} from "../Forms/LoginForm";
import {Link} from "react-router-dom";

function LoginView() {

    const onSubmit = (values: LoginFormData) => {
        console.log(values);
    };

    return (
        <>
            <Link to="/">Home</Link>
            <LoginForm onSubmit={onSubmit}/>
            <div>
                Dont have an account?
                <Link to="/registration">Register</Link>
            </div>
        </>
    );
}

export default LoginView;
