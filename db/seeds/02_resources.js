exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({
          id: 1,
          title: 'Peter',
          description: 'Peter. Help me',
          topic_id: 1,
          url: 'http://www.youtube.com',
          user_id: 1,
        }),
        knex('resources').insert({
          id: 2,
          title: 'Bassem',
          description: 'Ore-sama wa saigou Bassem dessu yo nae',
          topic_id: 2,
          url: 'http://www.youtube.com',
          user_id: 2,
        }),
        knex('resources').insert({
          id: 3,
          title: 'Monica',
          description: 'Ore-sama wa Monica dessu yo nae',
          topic_id: 3,
          url: 'http://www.youtube.com',
          user_id: 3,
        })
      ]);
    });
};