const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const createTables = require('./methods/createTables')

const connectionURL = path.join(__dirname, 'database.db')

const db = new sqlite3.Database(connectionURL, function (err) {
    if (err) console.log(err)
    this.run("PRAGMA foreign_keys = ON");
    createTables(this)
});

module.exports = db