const db = require('../index.js')

const [, , user_id, title, content] = process.argv

try {
    if (!user_id) throw new Error('user_id must not be NULL')
    if (!title) throw new Error('title must not be NULL')
    if (!content) throw new Error('content must not be NULL')
    db.run('INSERT INTO posts(user_id, title, content) VALUES(?, ?, ?)', [Number.parseInt(user_id), title, content], function (err) {
        if (err) throw new Error(err.message)
        console.log('DB updated with rowid: ' + this.lastID)
    })
} catch (e) {
    console.log(e.message)
}

db.close()