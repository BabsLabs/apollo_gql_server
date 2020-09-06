
exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('mushroom_locations', (table) => {
      table.increments().primary();
      table.integer('location_id').unsigned()
      table.foreign('location_id').references('locations.id')
      table.integer('mushroom_id').unsigned()
      table.foreign('mushroom_id').references('mushrooms.id')
      table.unique(['location_id', 'mushroom_id']);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('mushroom_locations')
  ]);
};