
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('mushrooms', (table) => {
      table.increments('id').primary();
      table.string('commonName');
      table.string('scientificName');
      table.integer('maxWidthInches');
      table.integer('maxHeightInches');
      table.boolean('poisonous');
      table.boolean('edible');
      table.unique(['commonName', 'scientificName'])
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('mushrooms')
  ]);
};