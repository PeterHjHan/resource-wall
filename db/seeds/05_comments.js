exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          id: 1,
          comment: 'ID 1: this was the best thing ever',
          user_id: 2,
          resource_id: 2
        }),
        knex('comments').insert({
          id: 2,
          comment: 'ID2: This wasn not the best thing ever',
          user_id: 3,
          resource_id: 3
        }),
        knex('comments').insert({
          id: 3,
          comment: 'ID 3: HELLO WORLD',
          user_id: 1,
          resource_id: 1
        })
      ]);
    });
};