const createTodosTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        todo        TEXT    NOT NULL,
        complete    INTEGER NOT NULL
    )
`


const createTables = (db) => {
    db.run(createTodosTableQuery)
}

module.exports = createTables