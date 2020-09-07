const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Mushroom {
    id: ID!
    commonName: String!
    scientificName: String!
    poisonous: Boolean!
    edible: Boolean!
    locations: [Location]
  }

   type Berry {
    id: ID!
    commonName: String!
    scientificName: String!
    maxDiameterInches: String
    locations: [Location]
  }

  type Location {
    id: ID!
    name: String!
    mushrooms: [Mushroom]
    berries: [Berry]
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