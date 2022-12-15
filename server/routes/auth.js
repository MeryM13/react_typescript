const express = require("express");
const {getUserByLogin} = require("../database/users");
const {addToken, getToken, deleteToken} = require("../database/tokens");
const {NotFoundError, AuthError} = require("../errors");
const {Cipher} = require("../service");

const authRouter = express.Router();
const TOKEN_COOKIE_NAME = "token";

authRouter.post('/', async (req, res,next) => {
    try {
        const user = await getUserByLogin(req.body.login);
        if (!user) {
            throw new NotFoundError("Пользователь не найден");
        }
        if (user.password !== Cipher(req.body.password, req.body.login)) {
            throw new NotFoundError("Перепроверьте правильность логина и пароля");
        }

        const token = await addToken(user.id);
        res.cookie(TOKEN_COOKIE_NAME, token.token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production"
        })
        res.status(200).json({ok: true});
    } catch (err) {
        next(err);
    }
});

authRouter.delete("/", async (req,res) => {
    try {
        const token = req.cookies.token;
        const foundToken = await getToken(token);
        if (!foundToken) {
            throw new AuthError("Пользователь не авторизован");
        }
        await deleteToken(token);
        res.clearCookie(TOKEN_COOKIE_NAME);
        res.status(200).json({ok: true});
    } catch (err) {
        next(err);
    }
});

module.exports = {
    authRouter
}
