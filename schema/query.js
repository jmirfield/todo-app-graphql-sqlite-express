const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { UserType, PostType } = require('./types')
const { resolveUsers, resolveUser, resolvePosts } = require('./resolvers')

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
        },
        Posts: {
            type: GraphQLList(PostType),
            args: { id: { type: GraphQLInt } },
            resolve: resolvePosts
        }
    }
})

module.exports = Query