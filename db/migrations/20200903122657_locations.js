
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('locations', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.unique(['name']);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('locations')
  ]);
};
