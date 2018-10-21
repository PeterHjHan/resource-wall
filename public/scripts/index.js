$(() => {
  
  loadCommonFunctions();

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
        createResourceElement(resource).appendTo($("body"));
    }
  });


  $('.grid').masonry({
    itemSelector: '.grid-item',
    stamp: '.stamp',
    columnWidth: 120
  });

});
