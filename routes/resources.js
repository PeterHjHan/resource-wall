"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .from("resources")
      .join("likes", "resources.id", "=", "likes.resource_id")
      .select("*")
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
