exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          username: 'peter',
          password: 'peter',
          avatar: 'http://emulation.gametechwiki.com/images/thumb/f/f5/Teknoparrot.png/210px-Teknoparrot.png'
        }),
        knex('users').insert({
          id: 2,
          username: 'bassem',
          password: 'bassem',
          avatar: 'http://emulation.gametechwiki.com/images/thumb/f/f5/Teknoparrot.png/210px-Teknoparrot.png'
        }),
        knex('users').insert({
          id: 3,
          username: 'monica',
          password: 'monica',
          avatar: 'http://emulation.gametechwiki.com/images/thumb/f/f5/Teknoparrot.png/210px-Teknoparrot.png'
        })
      ]);
    });
};