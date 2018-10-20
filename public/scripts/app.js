$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users/"
  }).done((users) => {
    for(user of users) {
      $("<article>").addClass(".grid-item").text(user.username).appendTo($("body"));
    }
  });;

  // Masonry, CSS grid layout library
  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });

});
