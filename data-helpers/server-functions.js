function makeDataHelpers(knex){

  function getUserById(userId, cb){
    knex('users')
      .first('*')
      .where({id: userId})
      .asCallback(cb);
  }

  function getUserByName(user){
    knex('users')
      .first('*')
      .where({username: user})
  }

  return {
    getUserById,
  };
}

module.exports = makeDataHelpers;
