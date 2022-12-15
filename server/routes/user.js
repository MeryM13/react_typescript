const express = require("express");
const {getUserById, getUserByLogin, addUser} = require("../database/users");
const {BadRequestError} = require("../errors");
const {checkAuth} = require("../service");
const userRouter = express.Router();

userRouter.get('/', async (req, res,next) => {
    try {
        const token = req.cookies.token;
        const userId = await checkAuth(token);
        const user = await getUserById(userId);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

userRouter.post('/', async (req, res, next) => {
    try {
        console.log(await getUserByLogin(req.body.login));
        if (await getUserByLogin(req.body.login)) {
            throw new BadRequestError("Такой пользователь существует");
        }

        const newUser = await addUser(req.body.login, req.body.password);

        res.status(200).json(newUser);
    } catch (err) {
        next(err);
    }
});

module.exports = {
    userRouter
}
