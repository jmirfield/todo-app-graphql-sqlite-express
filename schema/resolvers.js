const db = require('../database/index.js')

const resolveUsers = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT *, rowid AS id FROM users", (err, rows) => {
            if (err) reject([])
            resolve(rows)
        })
    })
}

const resolveUser = (source, args) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT first_name, age, rowid AS id FROM users WHERE rowid = ${args.id}`, (err, rows) => {
            if (err) reject([])
            resolve(rows)
        })
    })
}

module.exports = {
    resolveUsers,
    resolveUser
}