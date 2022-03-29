const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

module.exports = {
    UserType
}

