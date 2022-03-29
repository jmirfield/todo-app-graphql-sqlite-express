const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const Schema = require('../schema/index')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})