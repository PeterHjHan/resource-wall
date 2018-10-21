function createResourceElement(item) {

  var $article = $('<article>').addClass('grid-item');
  var $title = $('<h4>').addClass().text(item.title);
  var $description = $('<p>').addClass().text(item.description);
  var $userUrl = $('<a>').addClass().text(item.url);

  var $ratings = $('<p>').addClass().text(`Rating: ${item.rating}`);
  var $topic = $('<p>').addClass().text(`Topic ${item.topic}`);

  return $article
    .append($title)
    .append($description)
    .append($userUrl)
    .append($ratings)
    .append(renderLikeButton())
    .append($topic)
}

function showNewResourceForm() {
  $('#new-post-button').click(() => {
    $('#post-new-resource').slideToggle(300);
  });
};

function renderLikeButton() {
  var $like = $('<button>').addClass().text('LIKE');

  $($like).click((e)=>{
    e.preventDefault();
  })
  // $.ajax({
  //   method: "POST",
  //   url: "/resources/:id/likes"

  // })

  return $like
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

function renderNewPostForm() {
  const $form = $('<form>').addClass().attr("method", "POST").attr("action", "/resources/new");
  const $title = $('<textarea>').addClass().attr('name', "title").attr("placeholder", "Title");
  const $description = $('<textarea>').addClass().attr('name', "description").attr("placeholder", "description");
  const $url = $('<textarea>').addClass().attr('name', "url").attr("placeholder", "url");
  const $select = $('<select>').addClass("select-topics").attr("name", "topic");
  const $submitButton = $('<input>').addClass("btn btn-outline-secondary").attr('type', 'submit').attr('value', 'post');

  return $form
    .append($title)
    .append($description)
    .append($url)
    .append($select)
    .append(viewTopicsInSelect())
    .append($submitButton)
    .appendTo('#post-new-resource')
};

function updateExistingPost() {
  const $form = $('<form>').addClass().attr("method", "POST").attr("action", "/resources/:id");
  const $title = $('<textarea>').addClass().attr('name', "title").attr("placeholder", "Title");
  const $description = $('<textarea>').addClass().attr('name', "description").attr("placeholder", "description");
  const $url = $('<textarea>').addClass().attr('name', "url").attr("placeholder", "url");
  const $select = $('<select>').addClass("select-topics").attr("name", "topic");
  const $submitButton = $('<input>').addClass("btn btn-outline-secondary").attr('type', 'submit').attr('value', 'post');

  return $form
    .append($title)
    .append($description)
    .append($url)
    .append($select)
    .append(viewTopicsInSelect())
    .append($submitButton)
    .appendTo('#post-new-resource')
};

function renderTopicsInNavBar() {
  
  $.ajax({
    method: "GET",
    url: "/api/topics"
  }).then((topics) => {
    for (item of topics) {
      $('<a>').attr(`href`,`/topics/${item.topic}`).addClass('dropdown-item').text(item.topic)
        .appendTo('.dropdown-menu');
    }
  });
}

$('<button>').addClass().attr('value','like').appendTo('.grid-item');

function loadCommonFunctions() {
  showNewResourceForm();
  renderNewPostForm();
  renderTopicsInNavBar();
}


$('#test').on('click', function(event){
  event.preventDefault();
  console.log("it clicked!")
  $.ajax({
    method: 'POST',
    url: '/resources/:id',
    data: {
      score: $(this).val() 
    },
    success: function(result) {
      console.log("This worked");
    },
    error: function(result) {
      console.log("Sad face")
    }
  })
})

