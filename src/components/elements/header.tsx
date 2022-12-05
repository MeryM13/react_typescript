import React from "react";
import {Link} from "react-router-dom";

type headerProps = {
    userId: number,
}

export default function Header({userId}: headerProps) {
    if (!userId) {
        return <>
            <div className="header">
                <text>TopTopics</text>
                <Link to="/RegistrationForm" >Register</Link>
                <Link to="/LoginForm">Login</Link>
            </div>
        </>
    }
    else {
        return <>
            <div className="header">
                <text>TopTopics</text>
                <Link to="/RegistrationForm" >Register</Link>
                <Link to="/LoginForm">Login</Link>
            </div>
        </>
    }
}
