"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    const resourceId = req.body.resourceId;
    const ratingNum = req.body.ratingNum;
    const userId = req.session.id;
    console.log('user', userId);
    console.log('id', resourceId)
    knex('ratings')
      .first('*')
      .where({'ratings.user_id': userId, 'ratings.resource_id': resourceId})
      .then((results) => {
        if (results) {
          knex('ratings')
            .first('*')
            .where({'ratings.user_id': userId, 'ratings.resource_id': resourceId})
            .update('rating', ratingNum)
            .then((rating) => {
              res.json(rating);
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          knex('ratings')
            .insert({
              user_id: userId,
              resource_id: resourceId,
              rating: ratingNum
            })
            .then((rating) => {
              res.json(rating);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
  });

  return router;
}
