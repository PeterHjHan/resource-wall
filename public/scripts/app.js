$(() => {


  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).done((resources) => {
    for(resource of resources) {
      $("<article>").addClass(".grid-item").text(resource.description).appendTo($("body"));
    }  
    // $.ajax({
    //   method: "GET",
    //   url: "/api/users"
    // }).done((users) => {
    //   for(user of users) {
    //     $("<article>").addClass(".grid-item").text(user.username).appendTo($("body"));
    //   }
  });;

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });



  function createResourceElement(){
    const $article = $('<article>').addClass('grid-item');

    const $title = $('<h4>').addClass();

    const $description = $('<p>').addClass();

    const $userUrl = $('<a>').addClass();

    return $article
      .append($title)
      .append($description)
      .append($userUrl)

  }
});
