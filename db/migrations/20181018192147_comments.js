
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id').primary();
    table.text('comment').notNull();
    table.integer('user_id').notNull();
    table.integer('resource_id').notNull();

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.foreign('resource_id').references('id').inTable('resources').onDelete('CASCADE');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
