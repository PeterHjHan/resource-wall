$(() => {
  
  var topicName = window.location.pathname.slice(8);

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
      if(resource.topic === topicName) {
        createResourceElement(resource).appendTo($("body"));
      }
    }  
  });


  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });
// window.location.pathname

  // function createResourceElement(item){
    
  //   var $article = $('<article>').addClass('grid-item');
  //   var $title = $('<h4>').addClass().text(item.title);
  //   var $description = $('<p>').addClass().text(item.description);
  //   var $userUrl = $('<a>').addClass().text(item.url);
  //   //TODO: What about likes? DO we want to put a boolean column in the DB
  //   // var $like = $('<p>').addClass().text(item.like)
  //   var $ratings = $('<p>').addClass().text(`Rating: ${item.rating}`);
  //   var $topic = $('<p>').addClass().text(`Topic ${item.topic}`)

  //   return $article
  //     .append($title)
  //     .append($description)
  //     .append($userUrl)
  //     .append($ratings)
  //     .append($topic)
  // }
});
