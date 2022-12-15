const express = require('express');
const cors = require("cors");
const cookies = require("cookie-parser");
const {userRouter} = require("./routes/user");
const {authRouter} = require("./routes/auth");
const {topicRouter} = require("./routes/topic");
const {initDb} = require("./database/db");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookies());
app.use(
    cors(
        {
            credentials: true,
            origin: true
        }
    )
)

app.get("/", (req, res) => {
    res.status(200).json({ok: true});
});

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/topic", topicRouter);

app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.use(async function (req, res, next, err) {
//     res.locals.message = err.message;
//     res.locals.error = err;
//
//     // render the error page
//     res.status(err.status || 500);
//     res.json({ error: err.message });
// });

(async () => {
    await initDb();
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
})();
