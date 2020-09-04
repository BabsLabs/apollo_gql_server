
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('mushrooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('mushrooms').insert([
        {
          id: 1,
          commonName: 'Artists Conk',
          scientificName: 'Ganoderma Applanatum',
          maxWidthInches: 39,
          poisonous: false,
          edible: false
        },
        {
          id: 2,
          commonName: "Hawk's Wing",
          scientificName: 'Sarcodon Imbricatus',
          poisonous: false,
          edible: true
        },
        {
          id: 3,
          commonName: "eastern North American Destroying Angel",
          scientificName: 'Amanita bisporigera',
          maxWidthInches: 4,
          maxHeightInches: 10,
          poisonous: true,
          edible: false
        },
      ]);
    });
};
