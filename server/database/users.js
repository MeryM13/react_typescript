const {getDb} = require("./db");
const {Cipher} = require("../service");

module.exports = {
    addUser: async (login, password) => {
        const result = await getDb().run(
            'INSERT INTO users (login, password) VALUES (?, ?)',
            login, Cipher(password, login)
        )
        console.log(result);
        const newUser = {
            id: result.lastID,
            login,
            password: Cipher(password, login)
        }
        return newUser;
    },
    getUserByLogin: async (login) => await getDb().get('SELECT id, login, password FROM users WHERE login = ?', login),
    getUserById: async (id) => await getDb().get('SELECT id, login, password FROM users WHERE id = ?', id),
}
