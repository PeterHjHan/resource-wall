$(() => {
  var searchQuery = window.location.search.slice(7);
  var string = ""


  $.ajax({
    method: "GET",
    url: "/api/resources/"
  }).then((resources) => {
    for(resource of resources) {
      // Object.values(resource).includes(searchQuery)

      if(Object.values(resource).includes(searchQuery)){
        createResourceElement(resource).appendTo($("body"));
      }
      else if (!searchQuery) {

        createResourceElement(resource).appendTo($("body"));

      }
    }
  });


  //for every resources, if it contains the searchQuery, pull the resources

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });


});
