const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql')
const { resolvePosts, resolveUser } = require('./resolvers')

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLInt },
        user_id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        user: {
            type: UserType,
            resolve: (root) => resolveUser(root.user_id)
        }
    })
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        age: { type: GraphQLInt },
        posts: {
            type: GraphQLList(PostType),
            resolve: (root) => resolvePosts(root.id)
        }
    })
})


module.exports = {
    PostType,
    UserType,
}

