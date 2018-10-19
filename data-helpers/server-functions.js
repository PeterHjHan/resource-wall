function makeDataHelpers(knex) {

  function getUserById(userId, cb) {
    knex('users')
      .first('*')
      .where({
        id: userId
      })
      .asCallback(cb)
  };

  return {
    getUserById,
  };
}

module.exports = makeDataHelpers;