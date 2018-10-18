"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || 'development';
const express     = require('express');
const bodyParser  = require('body-parser');
const sass        = require('node-sass-middleware');
const app         = express();

const cookieSession = require('cookie-session');

const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const {
  getUserById,
  } = require('./data-helpers/server-functions')(knex);


// Seperated Routes for each Resource
const usersRoutes = require('./routes/users');

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


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ROUTING ~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


// Check for cookies
app.use((req, res, next) => {
  getUserById(req.session.userId, (err, user) => {
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
  getUserByName(req.params.username)
    .then(user => {
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

  res.render('user-settings');
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
app.get('/:topic', (req, res) => {
  var topicPage = req.params.topic;
  console.log(topicPage);
  knex('topics')
    .select('name')
    .asCallback((res)=> {
      console.log(res);
    })
  res.render('topic');
});

//specific resource
app.get('/:topic/:id', (req, res) => {
  res.render('resource');
});

//post a new resource
app.post('/:topic/new', (req, res) => {
  res.redirect('')
});

//delete a resource if you are the owner
app.post('/:topic/:id/delete', (req, res) => {

});











