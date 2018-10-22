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

  function updateExistingResource(resourceId, title, desc, URL, topicId, cb) {
    knex('resources')
      .where({id:resourceId})
      .update({title: title, description: desc, url: URL, topic_id: topicId})
      .asCallback(cb)
  }

  function addResourceToDatabase(title, desc, URL, userId, topicId, cb) {
    knex('resources')
      .insert({title: title, description: desc, url: URL, user_id: userId, topic_id: topicId})
      .asCallback(cb)
  }


  function getResourceById(resourceId, cb) {
    knex('resources')
      .select(
        'resources.id as resource_id',
        'resources.user_id as resource_user_id',
        'resources.title as resource_title',
        'resources.description as resource_description',
        'resources.url as resrouce_url',
        'resources.topic_id as resource_topic_id',
        'comments.id as comment_id',
        'comments.comment as comment',
        'comments.user_id as comment_user_id',
        'comments.resource_id as comment_resource_id',
        'topics.topic as topic',
        'topics.id as topic_id')
      .leftJoin('comments', 'resources.id', '=', 'comments.resource_id')
      .leftJoin('topics', 'resources.topic_id', '=', 'topics.id')
      .leftJoin('ratings', 'ratings.resource_id', '=', 'resources.id')
      .avg('ratings.rating as rating')
      .where({'resources.id': resourceId})
      .groupBy(
        'resources.id',
        'resources.user_id',
        'resources.title',
        'resources.description',
        'resources.url',
        'resources.topic_id',
        'comments.id',
        'comments.comment',
        'comments.user_id',
        'comments.resource_id',
        'topics.topic',
        'topics.id'
        )
      .asCallback(cb)
  }

  function getResourceByUserId(userId, cb) {
    knex('resources')
      .select('*')
      .where({'resources.user_id': userId})
      .asCallback(cb)
  }


  function updateUserDetails(userId, newUsername, newPassword, newAvatar, cb) {
    //PETER PLS REVIEW ONEGAISHI MEI SUUUUUUWWWWW
    knex('users')
      .returning('*')
      .update({username: newUsername, password: newPassword, avatar: newAvatar})
      .asCallback(cb)
  }

  function insertNewUser(username, password, cb) {
    knex('users')
      .returning('*')
      .insert({username: username, password: password, avatar: 'https://vanillicon.com/v2/58286045cae6a21f8e48f01f2fe3cb0a.svg'})
      .asCallback(cb)
  }


  function deleteResource(resourceId, userId, cb) {
    knex('resources')
      .first('*')
      .where({'resources.id': resourceId, 'resources.user_id': userId})
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
    getResourceByUserId,
    updateUserDetails,
    insertNewUser,
    deleteResource,
    updateExistingResource
     };
}

module.exports = makeDataHelpers;
