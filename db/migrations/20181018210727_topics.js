
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tables', (table) =>  {
    table.increments('id').primary();
    table.string('name').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tables');
};
