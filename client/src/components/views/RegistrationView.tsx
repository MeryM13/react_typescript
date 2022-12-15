import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import RegistrationForm, {RegistrationFormData} from "../Forms/RegistrationForm";
import {API, BASE_URL} from "../services/querys";

function RegistrationView() {

    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = (values: RegistrationFormData) => {
        const regRequest = async () => {
            console.log("Post request sent", values);
            setError("");
            setResult("");
            try {
                await API.user.register(values);
                setResult("Пользователь успешно добавлен");
                setTimeout(() => {
                    navigate("/login");
                }, 2000)
            }
            catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        }
        regRequest();
    };

    return (
        <>
            <Link to="/">Home</Link>
            <RegistrationForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
            <div>
                Already have an account?
                <Link to="/login">Login</Link>
            </div>
        </>
    );
}

export default RegistrationView;
