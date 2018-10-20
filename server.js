"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || 'development';
const express     = require('express');
const bodyParser  = require('body-parser');
const sass        = require('node-sass-middleware');
const app         = express();

const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const {
  getUserById,
  getUserByName,
  filterTopicsByName,
  addResourceToDatabase,
  getResourceById,
  updateUserDetails,
  insertNewUser,
  deleteResource
  } = require('./data-helpers/server-functions')(knex);


// Seperated Routes for each Resource
const usersRoutes = require('./routes/users');
const resourcesRoutes = require('./routes/resources');
const searchRoutes = require('./routes/search');
const commentsRoutes = require('./routes/comments');
const topicsRoutes = require('./routes/topics');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/styles', sass({
  src: __dirname + '/styles',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ['bump']
}));

// Mount all resource routes
app.use('/api/users', usersRoutes(knex));
app.use('/api/resources/', resourcesRoutes(knex));
app.use('/api/comments', commentsRoutes(knex));
app.use('/api/topics', topicsRoutes(knex));
app.use('/api/search', searchRoutes(knex));




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// Check for cookies
app.use((req, res, next) => {
  getUserById(req.session.id, (err, user) => {
    res.locals.user = user;
    next();
  });
});

// Home page
app.get('/', (req, res) => {
  res.render('index');
});


//----------------------- User ---------------------//

// backdoor by username
app.get('/backdoor/:username', (req, res) => {
  getUserByName(req.params.username, (err, user) => {
    console.log(req.session);
      req.session.id = user.id;
      res.redirect('/');
    });
});

//users can access their page with post form,
// their resources, their liked resources
app.get('/users/:user', (req, res) => {
  res.render('user');
});

app.get('/users/:user/settings', (req, res) => {
  if (res.locals.user) {
    res.render('user-settings');
  } else {
    res.status(403).send('Forbidden');
    res.redirect('/');
  }
});

app.post('/users/:user/settings', (req, res) => {
  //add req.body dteails
  if (req.session.id) {
    updateUserDetails(req.session.id, newUsername, newPassword, newAvatar, (err, user) => {
        if (err) {
          throw err;
        } else {
          res.redirect(`/users/${user.username}`);
        }
    });
  } else {
    res.redirect('/');
  }
});


//username and password must be validated before this post request
app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, 10);
  insertNewUser(username, password, (err, user) => {
    if (err) {
      res.redirect('/');
    } else {
      req.session.id = user.id; //make sure the callback is returning the userid
      res.redirect(`/users/${res.locals.user.username}`);
    }
  });
});


app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  getUserByName(username, (err, user) => {
    if (err) {
      res.redirect('/');
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        req.session.id = user.id;
        res.redirect(`/users/${res.locals.user.username}`);
      } else {
        res.redirect('/');
      }

    }
  });
});

app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

//----------------------- Pages ---------------------//

//search for a resource based on keyword
app.get('/search', (req, res) => {
  res.render('search');
});

//resources categorized under a topic
app.get('/topics/:topic', (req, res) => {
  const topicPage = req.params.topic;
  filterTopicsByName(topicPage, (err, rows)=> {
    if(!rows[0]) {
      res.redirect('/');
    } else {
      res.render('topics');
    }
  });
});

//specific resource
app.get('/resources/:id', (req, res) => {
  const resourceId = req.params.id
  getResourceById(resourceId, (err, resource) => {
    if (err) {
      res.redirect('/');
    } else {
      const templateVars = {resource};
      console.log(templateVars.resource[0].user_id);
      res.render('resource', templateVars);
    }
  });
});

//post a new resource
app.post('/resources/new', (req, res) => {
  // add req.body.: from from submission, or use AJAX
  // addResourceToDatabase(title, desc, URL, userId, topicId, (err, id) => {});
  res.redirect(`/users/${res.locals.user.username}`);
});

//delete a resource if you are the owner
app.post('/resources/:id/delete', (req, res) => {
  deleteResource(req.params.id, req.session.userId, (err, del) => {
    if (err) {
      throw err;
    } else {
      res.redirect(`/users/${res.locals.user.username}`);
    }
  });
});

