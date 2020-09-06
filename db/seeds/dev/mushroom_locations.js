
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('mushroom_locations').del()
    // .then(function () {
      // Inserts seed entries
      return knex('mushroom_locations').insert([
        { id: 1, location_id: 1, mushroom_id: 1 },
        { id: 2, location_id: 1, mushroom_id: 2 },
        { id: 3, location_id: 1, mushroom_id: 3 },
        { id: 4, location_id: 2, mushroom_id: 1 },
        { id: 5, location_id: 2, mushroom_id: 2 },
        { id: 6, location_id: 3, mushroom_id: 3 }
      ]);
    // });
};
