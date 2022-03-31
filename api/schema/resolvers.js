const db = require('../database/index.js')

const getTodos = () => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT *
            FROM todos 
        `
        db.all(sql, (err, rows) => {
            if (err) reject({})
            resolve(rows)
        })
    })
}

const addTodo = (todo, complete) => {
    return new Promise((resolve, reject) => {
        const sql = `
            INSERT INTO todos(todo, complete) VALUES (?, ?)
        `
        db.run(sql, [todo, complete], function (err) {
            if (err) reject(err)
            const sql = `
                SELECT * FROM todos WHERE id = ${this.lastID}
            `
            db.get(sql, function (err, row) {
                if (err) reject(err)
                resolve(row)
            })
        })
    })
}

const markTodo = (id, complete) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE todos SET complete = ? WHERE id = ?
        `
        db.serialize(() => {
            db.run(sql, [complete, id], function (err) {
                if (err) reject(err)
            })
            db.get(`SELECT * FROM todos WHERE id = ${id}`, function (err, row) {
                if (err) reject(err)
                resolve(row)
            })
        })
    })
}

const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `
            DELETE FROM todos WHERE id = ?
        `
        db.run(sql, [id], function (err) {
            if (err) reject(err)
            resolve(this.lastID)
        })
    })
}

const editTodo = (id, edit) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE todos SET todo = ? WHERE id = ?
        `
        db.serialize(() => {
            db.run(sql, [edit, id], function (err) {
                if (err) reject(err)
            })
            db.get(`SELECT * FROM todos WHERE id = ${id}`, function (err, row) {
                if (err) reject(err)
                resolve(row)
            })
        })
    })
}

module.exports = {
    getTodos,
    addTodo,
    markTodo,
    deleteTodo,
    editTodo
}