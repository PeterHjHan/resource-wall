exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('topics').insert({
          id: 1,
          name: 'Coding'
        }),
        knex('topics').insert({
          id: 2,
          name: 'Cooking'
        }),
        knex('topics').insert({
          id: 3,
          name: 'Languages'
        }),
        knex('topics').insert({
          id: 4,
          name: 'Photography'
        }),
        knex('topics').insert({
          id: 5,
          name: 'Gaming'
        })
      ]);
    });
};