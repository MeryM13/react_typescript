import React from "react";
import { Form as FinalForm, Field } from 'react-final-form'
import {Link} from "react-router-dom";
import {composeValidators, passwordRepeated, required, validLogin} from "../validators";


export default function RegistrationForm() {

    type FormValues = {
        login: string;
        password: string;
        repeat: string;
    };

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
                    <Field name="password" validate={composeValidators(required, passwordRepeated)}>
                        {({input, meta}) => (
                            <div>
                                <label>Пароль:
                                    <input type="password" {...input} placeholder="Пароль"/>
                                </label>
                                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    <Field name="repeat" validate={composeValidators(required, passwordRepeated)}>
                        {({input, meta}) => (
                            <div>
                                <label>Повторите пароль:
                                    <input type="password" {...input} placeholder="Повторите пароль"/>
                                </label>
                                {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                            </div>
                        )}
                    </Field>
                    <button type="submit">Войти</button>
                </form>
            )}>
        </FinalForm>
        <div>Already have an account?</div>
        <Link to="/LoginForm">Login</Link>
    </>;
}
