
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('id').primary();
    table.string('title').notNull();
    table.text('description').notNull();
    table.text('url');
    table.integer('user_id').unsigned().notNull();
    table.integer('topic_id').unsigned().notNull();

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('topic_id').references('id').inTable('topics');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
