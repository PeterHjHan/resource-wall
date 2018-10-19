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

  function filterTopicsByName(name, cb) {
    knex('topics')
      .select('topic')
      .where({topic : name})
      .asCallback(cb)
  };

  function addResourceToDatabase(title, desc, URL, userId, topicId, cb) {
    knex('resources')
      .insert({title: title, description: desc, url: URL, user_id: userId, topic_id: topicId})
      .asCallback(cb)
  }

  function getResourceById(resourceId, cb) {
    knex('resources')
      .select('*')
      .where({id: resourceId})
      .asCallback(cb)
  }

  function updateUserDetails(userId, newUsername, newPassword, newAvatar, cb) {
    //PETER PLS REVIEW ONEGAISHI MEI SUUUUUUWWWWW
    knex('users')
      .returning('*')
      .alterTable({username: newUsername, password: newPassword, avatar: newAvatar})
      .asCallback(cb)
  }

  function deleteResource(resourceId, userId, cb) {
    knex('resources')
      .first('*')
      .where({resource_id: resourceId, user_id: userId})
      .del()
      .asCallback(cb)
  };

  //comment for git troubleshooting
  return {
    getUserById,
    getUserByName,
    filterTopicsByName,
    addResourceToDatabase,
    getResourceById,
    updateUserDetails,
    deleteResource
  };
}

module.exports = makeDataHelpers;
