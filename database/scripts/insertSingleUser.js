const db = require('../index.js')

const [, , firstName, age] = process.argv

try {
    if (!firstName) throw new Error('firstName must not be NULL')
    if (!age) throw new Error('age must not be NULL')
    db.run('INSERT INTO users(first_name, age) VALUES(?, ?)', [firstName, Number.parseInt(age)], function (err) {
        if (err) throw new Error(err.message)
        console.log('DB updated with id: ' + this.lastID)
    })
} catch (e) {
    console.log(e.message)
}

db.close()