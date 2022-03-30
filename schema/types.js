const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql')

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        user_id: { type: GraphQLInt },
        title: { type: GraphQLString },
        content: { type: GraphQLString }
    }
})

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})


module.exports = {
    PostType,
    UserType,
}

