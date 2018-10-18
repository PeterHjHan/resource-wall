exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tables').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tables').insert({
          id: 1,
          name: 'Food'
        }),
        knex('tables').insert({
          id: 2,
          name: 'Sports'
        }),
        knex('tables').insert({
          id: 3,
          name: 'Movie'
        })
      ]);
    });
};