const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLInt } = require("graphql");
const { TodoType } = require('./types')
const { addTodo, markTodo, deleteTodo, editTodo } = require("./resolvers");

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTodo: {
            type: TodoType,
            args: {
                todo: { type: new GraphQLNonNull(GraphQLString) },
                complete: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve: (root, args) => addTodo(args.todo, args.complete)
        },
        markTodo: {
            type: TodoType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                complete: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve: (root, args) => markTodo(args.id, args.complete)
        },
        deleteTodo: {
            type: GraphQLInt,
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (root, args) => deleteTodo(args.id)
        },
        editTodo: {
            type: TodoType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                edit: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (root, args) => editTodo(args.id, args.edit)
        }
    }
})

module.exports = Mutation