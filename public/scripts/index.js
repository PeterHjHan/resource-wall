$(() => {

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
        createResourceElement(resource).appendTo($("body"));
    }  
  });


  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });
});
