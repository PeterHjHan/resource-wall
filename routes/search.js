"use strict";


const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    console.log(req.params.id);
    knex
      .from("resources")
      .join("likes", "resources.id", "=", "likes.resource_id")
      .join("ratings", "resources.id", "=", "ratings.resource_id")
      .join("topics", "resources.topic_id", "=", "topics.id")
      // .where(`%${req.body.id}`)
      .select("*")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
