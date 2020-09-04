
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('berries').del()
    .then(function () {
      // Inserts seed entries
      return knex('berries').insert([
        {
          id: 1,
          commonName: 'Thimbleberry',
          scientificName: 'Rubus parviflorus',
          maxDiameterInches: 2,
          color: "Red",
          poisonous: false,
          edible: true
        },
        {
          id: 2,
          commonName: "Wild Raspberry",
          scientificName: 'Rubus idaeus',
          maxDiameterInches: 2,
          color: "Red",
          poisonous: false,
          edible: true
        },
        {
          id: 3,
          commonName: "Black Chokecherry",
          scientificName: 'Prunus virginiana',
          maxDiameterInches: 5,
          color: "Red",
          poisonous: false,
          edible: true
        },
      ]);
    });
};
