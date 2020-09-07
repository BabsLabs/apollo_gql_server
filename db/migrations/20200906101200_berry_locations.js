
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('berry_locations', (table) => {
      table.increments().primary();
      table.integer('location_id').unsigned()
      table.foreign('location_id').references('locations.id')
      table.integer('berry_id').unsigned()
      table.foreign('berry_id').references('berries.id')
      table.unique(['location_id', 'berry_id']);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('berry_locations')
  ]);
};