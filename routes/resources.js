"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex("resources")
      .join("topics", "resources.topic_id", "=", "topics.id")
      .leftJoin("likes", "likes.resource_id", "=", "resources.id")
      .leftJoin("ratings", "resources.id", "=", "ratings.resource_id")
      .select(
       'resources.id as resource_id',
       'resources.title as resource_title',
       'resources.description as resource_description',
       'resources.url as resource_url',
       'topics.topic as topic',
       'likes.resource_id as likes_resource_id',
       'ratings.resource_id as ratings_resource_id',
       'resources.topic_id as resource_topic_id')
      .select('likes.id as likes_id')
      .then((results) => {
        res.json(results);
      });
  });

  return router;
}
