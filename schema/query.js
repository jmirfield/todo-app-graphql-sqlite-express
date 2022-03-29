const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { UserType } = require('./types')
const { resolveUsers, resolveUser } = require('./resolvers')

const Query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Users: {
            type: GraphQLList(UserType),
            resolve: resolveUsers
        },
        User: {
            type: UserType,
            args: { id: { type: GraphQLInt } },
            resolve: resolveUser
        }
    }
})

module.exports = Query