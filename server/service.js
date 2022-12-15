const md5 = require("md5");
const {getUserIdByToken} = require("./database/tokens");
const {AuthError} = require("./errors");

const Cipher = (message, pepperString) => {
    return md5("er74" + pepperString + message + "rt_9");
}

module.exports = {
    Cipher,
    checkAuth: async (token) => {
        const userId = await getUserIdByToken(token);
        if (!userId) {
            throw new AuthError("Пользователь не авторизован");
        }
        return userId;
    }
}
