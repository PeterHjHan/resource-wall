exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({
          title: 'Enligh is Fun!',
          description: 'English can be challenging but we are here to help with these simple guidelines!',
          topic_id: 3,
          url: 'https://www.duolingo.com/course/ko/en/Learn-Korean-Online',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'Mr.Ramoos\'s Scrabmmbled eggs',
          description: 'Scrambled eggs with cheese an chives',
          topic_id: 2,
          url: 'https://www.geniuskitchen.com/recipe/gordon-ramsays-scrambled-eggs-186294',
          user_id: 2,
        }),
        knex('resources').insert({
          title: 'Japanese Desu!',
          description: 'Let\'s learn Japanese with Anime',
          topic_id: 3,
          url: 'http://www.guidetojapanese.org/learn/',
          user_id: 3,
        }),
        knex('resources').insert({
          title: 'Sign Language',
          description: 'You will need it one day',
          topic_id: 3,
          url: 'http://www.signlanguage101.com/',
          user_id: 3,
        }),
        knex('resources').insert({
          title: 'CSS not work!',
          description: `This is what CSS does to you`,
          topic_id: 1,
          url: 'https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif',
          user_id: 3,
        }),
        knex('resources').insert({
          title: 'Learn to Code',
          description: `and Code to Learn`,
          topic_id: 1,
          url: 'http://www.lighthouselabs.ca',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'FPS and your Aim',
          description: `Improve your aiming skills!`,
          topic_id: 5,
          url: 'http://mouseaccuracy.com/',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'What is LoL',
          description: `LoL is short for League of Legends, where the game is fun but the community is really bad`,
          topic_id: 5,
          url: 'https://na.leagueoflegends.com',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'Casual Indie Game',
          description: `So fun!`,
          topic_id: 5,
          url: 'https://www.rock-paper-scissors-game.com/',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'Front or Back',
          description: `It's about web development`,
          topic_id: 1,
          url: 'https://www.coursereport.com/blog/front-end-development-vs-back-end-development-where-to-start',
          user_id: 1,
        }),
        knex('resources').insert({
          title: `You Cook This?`,
          description: `Then you need help!`,
          topic_id: 2,
          url: 'https://i.kym-cdn.com/photos/images/original/000/421/415/da5.gif',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'My Favorite Meal',
          description: `Have someone make it for you, Must be Delicious`,
          topic_id: 2,
          url: 'https://www.skipthedishes.com/',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'Good Selfies!',
          description: `Why not?`,
          topic_id: 4,
          url: 'https://www.allure.com/story/how-to-take-good-selfies',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'Behind the Lens',
          description: `How does the camera work and what's that click sound?`,
          topic_id: 4,
          url: 'https://www.explainthatstuff.com/digitalcameras.html',
          user_id: 1,
        }),
        knex('resources').insert({
          title: 'DSLR? Mirrorless?',
          description: `What's the difference? One's big and One's small??`,
          topic_id: 4,
          url: 'https://www.techradar.com/news/mirrorless-vs-dslr-cameras',
          user_id: 1,
        })
      ]);
    });
};