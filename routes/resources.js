"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex("resources")

      .join("topics", "resources.topic_id", "=", "topics.id")
      //.join("likes", "likes.resource_id", "=", "resources.id")
      // .join("ratings", "resources.id", "=", "ratings.resource_id")

      .select("*")
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}