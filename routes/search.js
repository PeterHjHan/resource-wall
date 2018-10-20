"use strict";


const express = require('express');
const router  = express.Router();

const bodyParser  = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

module.exports = (knex) => {

  router.get("/:query", (req, res) => {
    console.log('l;asdjfas;', req.params.query)

    // knex
      // .from("resources")
      // .join("likes", "resources.id", "=", "likes.resource_id")
      // .join("ratings", "resources.id", "=", "ratings.resource_id")
      // .join("topics", "resources.topic_id", "=", "topics.id")
      // // .where(`%${req.body.id}`)
      // .select("*")
      // .then((results) => {
      //   res.json(results);
    // });
  });

  return router;
}
