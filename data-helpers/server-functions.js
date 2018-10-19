function makeDataHelpers(knex) {

  function getUserById(userId, cb) {
    knex('users')
      .first('*')

      .where({id: userId})
      .asCallback(cb);
  };

  function getUserByName(user, cb) {
    knex('users')
      .first('*')
      .where({username: user})
      .asCallback(cb)
  };

  function deleteResource(resourceId, userId, cb) {
    knex('resources')
      .first('*')
      .where({resource_id: resourceId, user_id: userId})
      .del()
      .asCallback(cb)
  }
  return {
    getUserById,
    getUserByName
  };
}

module.exports = makeDataHelpers;
