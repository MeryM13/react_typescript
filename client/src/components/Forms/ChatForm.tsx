import React, {useState} from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import {Link, useParams} from "react-router-dom";
import {composeValidators, required, validLogin} from "../services/validators";

export default function ChatForm() {
    const {userId, topicId} = useParams();
    // const chat = GetChatById(topicId);
    let name = "theme";

    const onSubmit = () => {
        console.log();
    };

    return <>
        <h2>{name}</h2>
    </>;
}
