"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex("resources")

      .join("topics", "resources.topic_id", "=", "topics.id")
      .leftJoin("likes", "likes.resource_id", "=", "resources.id")
      .leftJoin("ratings", "resources.id", "=", "ratings.resource_id")
      .select('resources.id', 'resources.title', 'topics.topic', 'likes.resource_id', 'ratings.resource_id', 'resources.topic_id')
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}