
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', (table) =>  {
    table.increments('id').primary();
    table.string('topic').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics');
};
