"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .distinct()
      .from("resources")
      .join("topics", "resources.topic_id", "=", "topics.id")
      .leftJoin("likes", "likes.resource_id", "=", "resources.id")
      .leftJoin("ratings", "resources.id", "=", "ratings.resource_id")
      .select(
       'resources.id as resource_id',
       'resources.title as resource_title',
       'resources.description as resource_description',
       'resources.url as resource_url',
       'topics.topic as topic',
       'ratings.resource_id as ratings_resource_id',
       'likes.resource_id as likes_resource_id',
       'resources.topic_id as resource_topic_id')
      .avg('ratings.rating as rating')
      .count('likes.id as likes_id')
      .groupBy(
        'resources.id',
       'resources.title',
       'resources.description',
       'resources.url',
       'topics.topic',
       'likes.resource_id',
       'ratings.resource_id',
       'resources.topic_id',
       'likes.id')
      .then((results) => {
        res.json({results, userId: req.session.id});
      })
      .catch((err) => {
              console.error(err);
            });
  });

  return router;
}
