const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id              INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name      TEXT    NOT NULL,
        age             INT     NOT NULL
    )
`

const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        title       TEXT        NOT NULL,
        content     TEXT        NOT NULL,
        user_id     INTEGER     NOT NULL,
        FOREIGN KEY (user_id)
            REFERENCES  users   (id)
    )
`


const createTables = (db) => {
    db.run(createUsersTableQuery)
    db.run(createPostsTableQuery)
}

module.exports = createTables