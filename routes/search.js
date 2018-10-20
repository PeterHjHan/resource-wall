"use strict";


const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    knex
      .from("resources")
      .leftJoin("likes", "resources.id", "=", "likes.resource_id")
      .leftJoin("ratings", "resources.id", "=", "ratings.resource_id")
      .leftJoin("topics", "resources.topic_id", "=", "topics.id")
      // .where(`%${req.body.id}`)
      .select("*")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
