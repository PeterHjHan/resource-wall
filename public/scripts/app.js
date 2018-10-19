$(() => {

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    for(resource of resources) {
      // $("<article>").addClass(".grid-item").text(resource.description).appendTo($("body"));
      createResourceElement(resource).appendTo($("body"));
    }  
  });

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });
// window.location.pathname

  function createResourceElement(item){
    
    const $article = $('<article>').addClass('grid-item');
    const $title = $('<h4>').addClass().text(item.title);
    const $description = $('<p>').addClass().text(item.description);
    const $userUrl = $('<a>').addClass().text(item.url);
    // const $like = $('<p>').addClass().text(item.like)
    const $ratings = $('<p>').addClass().text(`Rating: ${item.rating}`);

    return $article
      .append($title)
      .append($description)
      .append($userUrl)
      .append($ratings)
  }
});
