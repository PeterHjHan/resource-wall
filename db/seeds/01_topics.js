exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('topics').insert({
          id: 1,
          topic: 'Coding'
        }),
        knex('topics').insert({
          id: 2,
          topic: 'Cooking'
        }),
        knex('topics').insert({
          id: 3,
          topic: 'Languages'
        }),
        knex('topics').insert({
          id: 4,
          topic: 'Photography'
        }),
        knex('topics').insert({
          id: 5,
          topic: 'Gaming'
        })
      ]);
    });
};