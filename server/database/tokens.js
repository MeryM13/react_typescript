const nanoid = require("nanoid");
const moment = require("moment");
const {getDb} = require("./db");

module.exports = {
    getToken: async (token) => await getDb().get('SELECT * FROM tokens WHERE token = ?', token),
    addToken: async (userId) => {
        const token = nanoid();
        const db = await getDb();
        const createdAt = moment(Date.now()).format("YYYY-MM-DD")
        const foundToken = db.get('SELECT * FROM tokens WHERE userId = ?', userId);
        const result = foundToken ?
            await getDb().run(
                'INSERT INTO tokens (userId, token, createdAt) VALUES (?, ?, ?)',
                userId, token, createdAt) :
            await getDb().run(
                'UPDATE tokens SET token = ?, createdAt = ? WHERE userId = ?',
                token, createdAt, userId)
        console.log(result);
        return result;
    },
    deleteToken: async(token) => await getDb().run('DELETE FROM tokens WHERE token = ?', token),
    getUserIdByToken: async(token) => await getDb().get('SELECT userId FROM tokens WHERE token = ?', token),
}
