const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

const resolvers = {
  Query: {
    
    mushrooms: async () => {
      const mushrooms = await database('mushrooms').select();
      mushrooms.map( async (mushroom) => {
        const locationsOfASingleMushroom = database('locations').whereIn('id',
          database('mushroom_locations').select('location_id').where('mushroom_id', mushroom.id))
        mushroom.locations = locationsOfASingleMushroom
      })
      return mushrooms
    },

    mushroom: async (parent, args) => {
      const mushroom =  await database('mushrooms').where(args).first()
      const locationsOfASingleMushroom = await database('locations').whereIn('id',
        database('mushroom_locations').select('location_id').where('mushroom_id', args.id))
      mushroom.locations = locationsOfASingleMushroom
      return mushroom
    },

    berries: async () => {
      const berries =  await database('berries').select()

      berries.map(async (berry) => {
        const locationsOfASingleBerry = database('locations').whereIn('id',
          database('berry_locations').select('location_id').where('berry_id', berry.id))
        berry.locations = locationsOfASingleBerry
      })
      return berries
    },

    berry: async (parent, args) => {
      const berry = await database('berries').where(args).first()
      const locationsOfASingleBerry = await database('locations').whereIn('id',
        database('berry_locations').select('location_id').where('berry_id', args.id))
      berry.locations = locationsOfASingleBerry
      return berry
    },

    locations: async () => {
      const locations = await database('locations').select()

      locations.map((location) => {
        const mushroomsOfASingleLocation = database('mushrooms').whereIn('id',
          database('mushroom_locations').select('mushroom_id').where('location_id', location.id))
      location.mushrooms = mushroomsOfASingleLocation
      })

      locations.map((location) => {
        const berriesOfASingleLocation = database('berries').whereIn('id',
          database('berry_locations').select('berry_id').where('location_id', location.id))
      location.berries = berriesOfASingleLocation
      })

      return locations
    },

    location: async (parent, args) => {
      const mushroomsOfASingleLocation = await database('mushrooms').whereIn('id',
      database('mushroom_locations').select('mushroom_id').where('location_id', args.id))
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