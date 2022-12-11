import React, {useState} from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import {Link, useParams} from "react-router-dom";
import {composeValidators, required, validLogin} from "../services/validators";
import {GetChatById} from "../../types/Chat";

export default function ChatForm() {
    const {id} = useParams();
    const chat = GetChatById(id);
    let name = chat?.theme;

    const onSubmit = () => {
        console.log();
    };

    return <>
        <h2>{name}</h2>
        <Link to="/">Home</Link>
        <FinalForm
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="login" validate={composeValidators(required, validLogin)}>
                        {({input, meta}) => (
                            <div>
                                <label>Логин:
                                    <input type="text" {...input} placeholder="Логин"/>
                                </label>
                                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    <Field name="password" validate={composeValidators(required)}>
                        {({input, meta}) => (
                            <div>
                                <label>Пароль:
                                    <input type="password" {...input} placeholder="Пароль"/>
                                </label>
                                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    <button type="submit">Войти</button>
                </form>
            )}>
        </FinalForm>
    </>;
}
