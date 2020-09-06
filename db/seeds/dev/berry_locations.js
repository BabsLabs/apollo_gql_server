
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('berry_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('berry_locations').insert([
        { id: 1, location_id: 1, berry_id: 1 },
        { id: 2, location_id: 1, berry_id: 2 },
        { id: 3, location_id: 1, berry_id: 3 },
        { id: 4, location_id: 2, berry_id: 2 },
      ]);
    });
};
