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
`

// Export typeDefs
module.exports = typeDefs;