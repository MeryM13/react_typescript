export const required = (value: string) => (value ? undefined : "Это поле не может быть пустым")

export const validLogin = (value: string) => {
    if (!/([a-z0-9]{6,20})/.test(value)) {
        return "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.";
    }
    return undefined;
};

export const passwordRepeated = (value: string, allValues: any) =>
    (allValues.password === allValues.repeat ? undefined : "Пароль и повтор пароля должны совпадать.");

export const composeValidators = (...validators: any[]) => (value: string, allValues: any) =>
    validators.reduce((error, validator) => error || validator(value, allValues), undefined);
