const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const Schema = require('../schema/index')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})