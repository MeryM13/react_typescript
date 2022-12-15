const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const {Cipher} = require("../service");

const DATABASE_FILENAME = "database.db";

let db;

const initDb = async () => {
    console.log("initialize database");
    if (!db) {
        db = await open({
            filename: DATABASE_FILENAME,
            driver: sqlite3.Database
        });
        await CreateTables();
        await startingFill();
    }
    return db;
};

async function CreateTables() {
    console.log("Create tables");
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL)`);

    await db.exec(`CREATE TABLE IF NOT EXISTS tokens (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        token TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(id))`);

    await db.exec(`CREATE TABLE IF NOT EXISTS topics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        theme TEXT NOT NULL,
        userId INTEGER,
        createdAt TEXT NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(id))`);

    await db.exec(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        body TEXT NOT NULL,
        topicId INTEGER NOT NULL,
        userId INTEGER NOT NULL,
        createdAt TEXT NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(id),
        FOREIGN KEY(topicId) REFERENCES topics(id))`);
}

async function startingFill() {
    await db.run(`INSERT OR IGNORE INTO users(login,password) VALUES (?,?)`, "LunaLovegood", Cipher("Thestral", "LunaLovegood"));
    await db.run(`INSERT OR IGNORE INTO users(login,password) VALUES (?,?)`, "MeryM13", Cipher("Anna@1987", "MeryM13"));
    await db.run(`INSERT OR IGNORE INTO users(login,password) VALUES (?,?)`, "Fia", Cipher("MemoryAngel", "Fia"));
    await db.run(`INSERT OR IGNORE INTO users(login,password) VALUES (?,?)`, "James", Cipher("Normie", "James"));
    await db.exec(`INSERT OR IGNORE INTO topics(theme,userId,createdAt) VALUES (?,?,?)`, "What are you doing?", 1, "23-11-2022 16:34");
    await db.exec(`INSERT OR IGNORE INTO topics(theme,userId,createdAt) VALUES (?,?,?)`, "Hello people", 4, "25-11-2022 17:41");
    await db.exec(`INSERT OR IGNORE INTO topics(theme,userId,createdAt) VALUES (?,?,?)`, "So, Them's Fighting Herds is amazing", 2, "3-12-2022 21:06");
}

module.exports = {
    initDb,
    getDb: () => {
        console.log(db);
        return db;
    },
}
