exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({
        
          title: 'Peter',
          description: 'Peter. Help me',
          topic_id: 1,
          url: 'http://www.youtube.com',
          user_id: 1,
        }),
        knex('resources').insert({
        
          title: 'Bassem',
          description: 'Ore-sama wa saigou Bassem dessu yo nae',
          topic_id: 2,
          url: 'http://www.youtube.com',
          user_id: 2,
        }),
        knex('resources').insert({
        
          title: 'Monica',
          description: 'Ore-sama wa Monica dessu yo nae',
          topic_id: 3,
          url: 'http://www.youtube.com',
          user_id: 3,
        }),
        knex('resources').insert({
        
          title: 'Ujuhbaba',
          description: 'KOKO COCO KOKO COCO',
          topic_id: 3,
          url: 'http://www.youtube.com',
          user_id: 3,
        }),
        knex('resources').insert({
        
          title: 'Keigo',
          description: `It's  such wonderful time of the year~`,
          topic_id: 2,
          url: 'http://www.youtube.com',
          user_id: 3,
        }),
        knex('resources').insert({
        
          title: 'Kagebunshin',
          description: `Doe Shi Tae TOTOTOTOTOTOOTOTOT`,
          topic_id: 3,
          url: 'http://www.youtube.com',
          user_id: 1,
        })
      ]);
    });
};