import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {API} from "../services/querys";

export default function Header() {

    const [userId,setUserId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setUserId(0);
        const userRequest = async () => {
            try {
                const user = await API.user.get();
                setUserId(user.id);
            } catch (e) {
            }
        }
        userRequest();
    }, []);

    const handleLogout = () => {
        const logoutRequest = async () => {
            try {
                await API.auth.logout();
                setUserId(0);
                navigate("/");
            } catch (e) {
            }
        };
        logoutRequest();
    }

    if (!userId) {
        return <>
            <div className="header">
                TopTopics
                <Link to="/registration" >Зарегистрироваться</Link>
                <Link to="/login">Войти</Link>
            </div>
        </>
    }
    else {
        return <>
            <div className="header">
                TopTopics
                <button onClick={handleLogout}>Выход</button>
            </div>
        </>
    }
}
