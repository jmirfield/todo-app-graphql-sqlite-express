const { GraphQLObjectType, GraphQLList } = require('graphql')
const { TodoType } = require('./types')
const { getTodos } = require('./resolvers')

const Query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Todos: {
            type: GraphQLList(TodoType),
            resolve: getTodos
        }
    }
})

module.exports = Query