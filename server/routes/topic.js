const express = require("express");
const {getAllTopics, getTopicById, addTopic} = require("../database/topics");
const {checkAuth} = require("../service");
const {NotFoundError} = require("../errors");
const topicRouter = express.Router();

topicRouter.get("/", async (req, res,next) => {
    try {
        const TopicCollection = await getAllTopics(req.body?.searchString);
        res.status(200).json(TopicCollection);
    } catch (err) {
        next(err);
    }
});

topicRouter.get("/:id", async (req, res,next) => {
    try {
        const topic = await getTopicById(req.params.id);
        if (!topic)
        {
            throw new NotFoundError("Тема не найдена");
        }
        res.status(200).json(topic);
    } catch (err) {
        next(err);
    }
});

topicRouter.post("/",async (req, res,next) => {
    try {
        const token = req.cookies.token;
        const userId = await checkAuth(token);
        const newTopic = await addTopic(req.body.theme, userId);

        res.status(200).json(newTopic);
    } catch (err) {
        next(err);
    }
});

module.exports = {
    topicRouter
}
