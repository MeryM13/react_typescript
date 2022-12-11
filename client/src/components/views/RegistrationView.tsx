import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import RegistrationForm, {RegistrationFormData} from "../Forms/RegistrationForm";
import {BASE_URL} from "../services/querys";

function RegistrationView() {

    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const onSubmit = (values: RegistrationFormData) => {
        const regRequest = async () => {
            setError("");
            setResult("");
            try {
                const response = await fetch(BASE_URL + "/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                });
                if (response.status !== 200) {
                    const responseData = await response.json();
                    throw Error(responseData.message);
                }
                setResult("User added");
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
        console.log(values);
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
