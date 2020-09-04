const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

const resolvers = {
  Query: {
    mushrooms: async () => {
      return await database('mushrooms').select();
    },
    mushroom: async (parent, args) => {
      return await database('mushrooms').where(args).first()
    },
    berries: async () => {
      return await database('berries').select()
    },
    berry: async (parent, args) => {
      return await database('berries').where(args).first()
    },
    locations: async () => {
      return await database('locations').select()
    },
    location: async (parent, args) => {
      return await database('locations').where(args).first()
    },

    authenticationError: (parent, args, context) => {
      throw new AuthenticationError('must authenticate');
    },
  },
};

module.exports = resolvers;