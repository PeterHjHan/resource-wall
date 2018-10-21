
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNull();
    table.integer('resource_id').unsigned().notNull();

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('resource_id').references('id').inTable('resources').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
};
