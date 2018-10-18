function makeDataHelpers(knex){

  function getUserById(userId, cb){
    knex('users')
      .first('*')
      .where({id: userId})
      .asCallback(cb);
  }

  function getUserByName(user, cb){
    knex('users')
      .first('*')
      .where({username: user})
      .asCallback(cb)
  }

  return {
    getUserById,
    getUserByName
  };
}

module.exports = makeDataHelpers;
