const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// Imports Required for Apollo Server
const {ApolloServer} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// This Establishes and Starts Apollo Server
const startServ = async() => {
  const server = new ApolloServer({typeDefs, resolvers, context: authMiddleware});
  await server.start();
  server.applyMiddleware({app});
  console.log(`GraphQL API active http://localhost:${PORT}${server.graphqlPath}`);
};
startServ();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
