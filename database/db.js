const sqlite3 = require('sqlite3').verbose()

const connectionURL = './database/database.db'

const db = new sqlite3.Database(connectionURL, (err) => {
    if (err) console.log(err)
    console.log('Connected to DB')
})

module.exports = db