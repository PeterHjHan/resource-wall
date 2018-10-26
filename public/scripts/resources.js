$(() => {


  loadCommonFunctions();



  $.ajax({
    method: "GET",
    url: "/api/users/"
  }).done((users) => {
    // for(user of users) {
    //   $("<article>").addClass(".grid-item").text(user.username).appendTo($("body"));
    // }
  });;
});
