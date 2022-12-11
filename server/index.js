const express = require('express');
const cors = require("cors");
const nanoid = require("nanoid");
var cookies = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3001;

const UserCollection = [
    {
        id: nanoid(),
        login: "LunaLovegood",
        password: "Thestral"
    },
    {
        id: nanoid(),
        login: "MeryM",
        password: "Anna@1987"
    },
    {
        id: nanoid(),
        login: "Fia",
        password: "MemoryAngel13"
    },
    {
        id: nanoid(),
        login: "Dra`n`go",
        password: "LmaoEnergyDrink"
    },
    {
        id: nanoid(),
        login: "James",
        password: "Normie"
    },
];

const TokenCollection = [
    {
        userId:"1432",
        token: "2541",
        createdAt: Date()
    }
];

app.use(
    cors(
        {
            credentials: true,
            origin: true
        }
    )
)
app.use(express.json());
app.use(cookies);
TOKEN_COOKIE_NAME = "token";

app.get('/', (req, res) => {
    res.status(200).send({ok: true}); // отправка ответа
});

app.get('/user', (req, res) => {
    const token = req.cookies.token;
    const foundToken = TokenCollection.find(tokenItem => tokenItem.token === token);
    if (!foundToken)
    {
        res.status(401).json({
            message: "user is not authorized"
        })
    }

    const user = UserCollection.find(user => user.id === foundToken.userId);
    res.status(200).json(user);
});

app.post('/user', (req, res) => {

    if (UserCollection.find(user => user.login === req.body.login)) {
        res.status(400).json({
            message: "This user exists"
        })
    }

    console.log("post");
    console.log(req.body);
    const newUser = {
        id: nanoid(),
        login: req.body.login,
        password: req.body.password
    }
    UserCollection.push(newUser);
    console.log(UserCollection);
    res.status(200).json(newUser);
});

app.post('/auth', (req, res) => {

    const user = UserCollection.find(user => user.login === req.body.login);
    if (!user) {
        res.status(404).json({
            message: "This user not exists"
        })
    }
    if (user.password !== req.body.password) {
        res.status(400).json({
            message: "This user not exists"
        })
    }

    const token = nanoid();
    TokenCollection.push(
        {
            userId: user.id,
            token,
            createdAt: Date()
        }
    )
    res.cookie(TOKEN_COOKIE_NAME, token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production"
    })

    res.status(200).json({ok: true});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
