const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

const resolvers = {
  Query: {
    
    mushrooms: async () => {
      return await database('mushrooms').select();
    },

    mushroom: async (parent, args) => {
      const mushroom =  await database('mushrooms').where(args).first()
      const locationsOfASingleMushroom = await database('locations').whereIn('id',
        database('mushroom_locations').select('location_id').where('mushroom_id', args.id)
      )
      mushroom.locations = locationsOfASingleMushroom
      return mushroom
    },

    berries: async () => {
      return await database('berries').select()
    },

    berry: async (parent, args) => {
      const berry = await database('berries').where(args).first()
      const locationsOfASingleBerry = await database('locations').whereIn('id',
        database('berry_locations').select('location_id').where('berry_id', args.id)
      )
      berry.locations = locationsOfASingleBerry
      return berry
    },

    locations: async () => {
      return await database('locations').select()
    },

    location: async (parent, args) => {
      const mushroomsOfASingleLocation = await database('mushrooms').whereIn('id',
      database('mushroom_locations').select('mushroom_id').where('location_id', args.id)
      )
      const location = await database('locations').where(args).first()
      location.mushrooms = mushroomsOfASingleLocation
      return location
    },

    authenticationError: (parent, args, context) => {
      throw new AuthenticationError('must authenticate');
    },
  },
};

module.exports = resolvers;