const db = require('../database/db.js')

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
        db.get(`SELECT *, rowid AS id FROM users WHERE rowid = ${args.id}`, (err, rows) => {
            if (err) reject([])
            resolve(rows)
        })
    })
}

module.exports = {
    resolveUsers,
    resolveUser
}