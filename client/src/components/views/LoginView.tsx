import React, {useState} from 'react';
import LoginForm, {LoginFormData} from "../Forms/LoginForm";
import {Link, useNavigate} from "react-router-dom";
import {API} from "../services/querys";

function LoginView() {

    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = (values: LoginFormData) => {
        const authRequest = async () => {
            setError("");
            setResult("");
            try {
                await API.auth.login(values);
                setResult("User logged in");
                setTimeout(() => {
                    navigate("/");
                }, 2000)
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        }
        authRequest();
    };

    return (
        <>
            <Link to="/">Home</Link>
            <LoginForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
            <div>
                Dont have an account?
                <Link to="/registration">Register</Link>
            </div>
        </>
    );
}

export default LoginView;
