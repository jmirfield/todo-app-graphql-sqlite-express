const db = require('../index.js')

const [, , todo, complete] = process.argv

try {
    if (!todo) throw new Error('todo must not be NULL')
    if (!complete) throw new Error('complete must not be NULL')
    const isComplete = complete.toLowerCase() === 'true' ? true : false
    db.run('INSERT INTO todos(todo, complete) VALUES(?, ?)', [todo, isComplete], function (err) {
        if (err) throw new Error(err.message)
        console.log('DB updated with rowid: ' + this.lastID)
    })
} catch (e) {
    console.log(e.message)
}

db.close()