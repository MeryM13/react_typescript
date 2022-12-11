import React from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import {Link} from "react-router-dom";
import {composeValidators, required, validLogin} from "../services/validators";

export type LoginFormData = {
    login: string;
    password: string;
};

type LoginFormProps = {
    onSubmit: (data: LoginFormData) => void
}

export default function LoginForm({onSubmit}:LoginFormProps) {
    return <>
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
