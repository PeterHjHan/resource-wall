"use strict";


const express = require('express');
const router  = express.Router();

// const bodyParser  = require('body-parser');
// router.use(bodyParser.urlencoded({ extended: true }));

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const searchPhrase = decodeURI(req._parsedOriginalUrl.query).toLowerCase();
    knex
      .select("*")
      .from("resources")
      .whereRaw('LOWER(title) LIKE ?', `%${[searchPhrase]}%`)
      .orWhereRaw('LOWER(description) LIKE ?', `%${[searchPhrase]}%`)
      .orWhereRaw('LOWER(url) LIKE ?', `%${[searchPhrase]}%`)
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
