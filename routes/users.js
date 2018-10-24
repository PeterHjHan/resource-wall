"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get('/', (req, res) => {
    res.json({userId: req.session.id});
  });

  return router;
}
