require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolvers');
const context = require('./gql/context');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context: context,
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if (err.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    return {'message': err.message, 'code': err.extensions.code};
  },
});

const app = express();
server.applyMiddleware({ app, path: '/api/v1/graphql' });

const portNumber = 4000
app.listen({ port: portNumber }, () => {
  console.log(`🚀  Server ready at localhost:${portNumber}${server.graphqlPath}`);
});