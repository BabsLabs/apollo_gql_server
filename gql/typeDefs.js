const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Mushroom {
    id: ID!
    commonName: String!
    scientificName: String!
    poisonous: Boolean!
    edible: Boolean!
  }

   type Berry {
    id: ID!
    commonName: String!
    scientificName: String!
    maxDiameterInches: String
  }

  type Location {
    id: ID!
    name: String!
  }

  type Query {
    mushrooms: [Mushroom]
    mushroom(id: ID!): Mushroom

    berries: [Berry]!
    berry(id: ID!): Berry

    locations: [Location]
    location(id: ID!): Location

    authenticationError: String
  }
`;

module.exports = typeDefs;