$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users/"
  }).done((users) => {
    // console.log(window.location.pathname.replace('/topics/', ''));
    for(user of users) {
      $("<article>").addClass(".grid-item").text(user.username).appendTo($("body"));
    }
  });;

  // $('.grid').masonry({
  //   // options...
  //   itemSelector: '.grid-item',
  //   columnWidth: 20
  // });

});
