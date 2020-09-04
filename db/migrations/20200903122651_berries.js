
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('berries', (table) => {
      table.increments('id').primary();
      table.string('commonName');
      table.string('scientificName');
      table.string('color');
      table.integer('maxDiameterInches');
      table.boolean('poisonous');
      table.boolean('edible');
      table.unique(['commonName', 'scientificName'])
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('berries')
  ]);
};
