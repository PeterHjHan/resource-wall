$(() => {
  var searchQuery = window.location.search.slice(7);
  
  
  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
        createResourceElement(resource).appendTo($("body"));
    }  
  });


  //for every resources, if it contains the searchQuery, pull the resources

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });


});
