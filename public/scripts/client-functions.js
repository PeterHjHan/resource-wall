function createResourceElement(item, userId) {
  var $article = $('<article>').addClass('grid-item').attr('id', item.topic)
  var $title = $('<h4>').addClass('title').text(item.resource_title);
  var $linkedTitle = $('<a>').attr('href', `/resources/${item.resource_id}`).append($title);
  var $hr = $('<hr>').addClass();
  var $description = $('<p>').addClass('desc').text(item.resource_description);
  var $hr1 = $('<hr>').addClass();
  var $userUrl = $('<a>').addClass('urlLink').attr('href', item.resource_url).text("link").attr('title',item.resource_url);
  var $hr2 = $('<hr>').addClass();
  var $topic = $('<p>').addClass('title').text(`${item.topic}`).attr('id',`${item.topic}`);
  var $like = $('<i>').addClass('far fa-heart clientLike').attr('id', item.resource_id);
  if (item.rating) {
    var $ratings = $('<p>').addClass('ratings').text(`${item.rating.slice(0, 4)}`);
  } else {
    var $ratings = $('<p>').addClass('ratings').text(`No rating yet.`);
  }
  var $topic = $('<p>').addClass('title').text(`${item.topic}`).attr('id',`${item.topic}`);


const resourceId = item.resource_id;
$.ajax({
      method: 'GET',
      url: "/api/likes",
      data: {resourceId}
    }).then((results) => {
      if (results.results && results.results.user_id === results.userId) {
        $($like).css({
          'color': 'red'
        });
      } else {
        $($like).css({
          'color': 'black'
        });
      }
    });


  return $article
    .append($topic)
    .append($linkedTitle)
    .append($hr)
    .append($description)
    .append($hr1)
    .append($userUrl)
    .append($hr2)
    .append($ratings)
    .append($like)

}

function showNewResourceForm() {
  $('#new-post-button').click(() => {
    $('#post-new-resource').slideToggle(300);
  });
};


function viewTopicsInSelect() {
  $.ajax({
    method: "GET",
    url: "/api/topics"
  }).then((topics) => {
    for (item of topics) {
      $('<option>').text(item.topic)
        .appendTo('.select-topics')
    }
  });
}

//TODO: unncessary, may delete it after the final submission
function renderNewPostForm() {
  const $form = $('<form>').addClass().attr("method", "POST").attr("action", "/resources/new");
  const $title = $('<textarea>').addClass('form-control').attr('name', "title").attr("placeholder", "Title")
  const $description = $('<textarea>').addClass('form-control').attr('name', "description").attr("placeholder", "description");
  const $url = $('<textarea>').addClass('form-control').attr('name', "url").attr("placeholder", "url");
  const $select = $('<select>').addClass("form-control").attr("name", "topic").attr('id','exampleFormControlSelect2')
  const $submitButton = $('<input>').addClass("btn btn-outline-secondary").attr('type', 'submit').attr('value', 'post');
  const $formDiv = $('<div>').addClass('form-group')
  const $formDiv1 = $('<div>').addClass('form-group')
  const $formDiv2 = $('<div>').addClass('form-group')

  const $titleDiv = $formDiv.append($title)
  const $descDiv = $formDiv1.append($description)
  const $urlDiv = $formDiv2.append($url)


  return $form
    .append($titleDiv)
    .append($descDiv)
    .append($urlDiv)
    .append($select)
    .append(viewTopicsInSelect())
    .append($submitButton)
    .appendTo('#post-new-resource')
};


//THIS FUNCTION IS UNUSED
// function updateExistingPost() {
//   const $form = $('<form>').addClass().attr("method", "POST").attr("action", "/resources/:id");
//   const $title = $('<textarea>').addClass().attr('name', "title").attr("placeholder", "Title");
//   const $description = $('<textarea>').addClass().attr('name', "description").attr("placeholder", "description");
//   const $url = $('<textarea>').addClass().attr('name', "url").attr("placeholder", "url");
//   const $select = $('<select>').addClass("select-topics").attr("name", "topic");
//   const $submitButton = $('<input>').addClass("btn btn-outline-secondary").attr('type', 'submit').attr('value', 'post');

//   return $form
//     .append($title)
//     .append($description)
//     .append($url)
//     .append($select)
//     .append(viewTopicsInSelect())
//     .append($submitButton)
//     .appendTo('#post-new-resource')
// };

function renderTopicsInNavBar() {

  $.ajax({
    method: "GET",
    url: "/api/topics"
  }).then((topics) => {
    for (item of topics) {
      const $li = $('<li>')
      const $topic = $('<a>').attr(`href`,`/topics/${item.topic}`).addClass('dropdown-item').text(item.topic)

      $li.append($topic)
         .appendTo('#topics-dropdown');
    }

  });
}

function renderNewComment() {
  $("#comment-btn").on("click", function(event) {
    event.preventDefault();
    let commentText = $(event.target).siblings("textarea").val();
    let resourceId = window.location.pathname.slice(11);

    console.log("RESOURCEID:", resourceId);
    console.log("COMMENTETXT:", commentText);
    $.ajax({
      url: "/comments",
      method: "POST",
      data: {commentText, resourceId},
      success: function(result) {
        console.log("WE WORK!", result);
      },
      error: function(error) {
        console.log("PANIC, ERROR", error);
      }
    });
  });
}

$('<button>').addClass().attr('value','like').appendTo('.grid-item');

function loadCommonFunctions() {
  showNewResourceForm();
  renderNewPostForm();
  renderTopicsInNavBar();
  renderNewComment();
}

