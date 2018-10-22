"use strict";

const express = require('express');
const router  = express.Router();

// const bodyParser  = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));

module.exports = (knex) => {
  router.get("/", (req, res) => {
  console.log(req.session.id);
    const searchPhrase = decodeURI(req._parsedOriginalUrl.query).toLowerCase();
    knex
      .select(
       'resources.id as resource_id',
       'resources.title as resource_title',
       'resources.description as resource_description',
       'resources.url as resource_url',
       'resources.topic_id as resource_topic_id')
      .from('resources')
      .whereRaw('LOWER(title) LIKE ?', `%${[searchPhrase]}%`)
      .orWhereRaw('LOWER(description) LIKE ?', `%${[searchPhrase]}%`)
      .orWhereRaw('LOWER(url) LIKE ?', `%${[searchPhrase]}%`)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
