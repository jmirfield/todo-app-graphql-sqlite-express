const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql')

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: { type: GraphQLInt },
        todo: { type: GraphQLString },
        complete: { type: GraphQLBoolean },
    })
})


module.exports = {
    TodoType,
}

