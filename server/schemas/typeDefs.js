const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: SaveBookInput): User
    removeBook(bookId: String!): User
}
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
}
input SaveBookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
}
type Auth {
    token: ID!
    user: User
}
`

// Export typeDefs
module.exports = typeDefs;