exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('topics').insert({
          id: 1,
          name: 'Food'
        }),
        knex('topics').insert({
          id: 2,
          name: 'Sports'
        }),
        knex('topics').insert({
          id: 3,
          name: 'Movie'
        })
      ]);
    });
};