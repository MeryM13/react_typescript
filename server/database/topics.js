const {getDb} = require("./db");
const moment = require("moment");

module.exports = {
    getAllTopics: async (searchString) => getDb().all('SELECT * FROM topics WHERE theme LIKE "%"||?||"%"', searchString),
    getTopicById: async (id) => getDb().get('SELECT * FROM topics WHERE id = ?', id),
    addTopic: async(theme, userId) => {
        const newTopic = {
            theme,
            userId,
            createdAt: moment(Date.now()).format("YYYY-MM-DD hh:mm")
        }
        const result = await getDb().run(
            'INSERT INTO topics (theme, userId, createdAt) VALUES (?, ?, ?)',
            newTopic.theme, newTopic.userId, newTopic.createdAt);
        newTopic.id = result.lastID;
        return newTopic;
    }
}
