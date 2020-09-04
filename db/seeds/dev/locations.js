
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          id: 1,
          name: 'Forest',
        },
        {
          id: 2,
          name: 'Desert',
        },
        {
          id: 3,
          name: 'Great Plains',
        },
      ]);
    });
};
