import React from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import {Link} from "react-router-dom";

//create a connection to https://github.com/dmitryweiner/mini-chat-server for Login and Registration Forms

export default function LoginForm() {

    type FormValues = {
        login: string;
        password: string;
    };

    const required = (value: string) => (value ? undefined : "Это поле не может быть пустым")
    const validLogin = (value: string) => {
        if (!/([a-z0-9]{6,20})/.test(value)) {
            return "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.";
        }
        return undefined;
    };
    const composeValidators = (...validators: any[]) => (value: string, allValues: any) =>
        validators.reduce((error, validator) => error || validator(value, allValues), undefined);


    const onSubmit = (values: FormValues) => {
        // отправка данных на сервер
        console.log(values);
    };

    return <>
        <Link to="/DefaultForm">Home</Link>
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
        <div>Dont have an account?</div>
        <Link to="/RegistrationForm">Register</Link>
    </>;
}