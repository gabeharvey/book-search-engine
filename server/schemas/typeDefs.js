const {gql} = require('apollo-server-express');

const typeDefs = gql`
type: Query {
    me: User
}
`

// Export typeDefs
module.exports = typeDefs;