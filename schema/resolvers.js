const db = require('../database/index.js')

const resolveUsers = () => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT * FROM users
        `
        db.all(sql, (err, rows) => {
            if (err) reject([])
            resolve(rows)
        })
    })
}

const resolveUser = (source, args) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT *
            FROM users 
            WHERE id = ${args.id}
        `
        db.get(sql, (err, row) => {
            if (err) reject({})
            resolve(row)
        })
    })
}

const resolvePosts = (source, args) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT *
            FROM posts 
            WHERE user_id = ${args.id}
        `
        db.all(sql, (err, rows) => {
            if (err) reject({})
            resolve(rows)
        })
    })
}

module.exports = {
    resolveUsers,
    resolveUser,
    resolvePosts
}