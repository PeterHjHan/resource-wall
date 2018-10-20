
$(() => {


  $.ajax({

    method: "GET",
    url: "/api/search/"
  }).then((resources) => {
    var searchQuery = window.location.pathname;
    console.log('A;SDJLGH;ALSKHGJAL;S', searchQuery);
    console.log('done');
    // for(resource of resources) {
    //   // Object.values(resource).includes(searchQuery)

    //   if(Object.values(resource).includes(searchQuery)){
    //     createResourceElement(resource).appendTo($("body"));
    //   }
    //   else if (!searchQuery) {

    //     createResourceElement(resource).appendTo($("body"));

    //   }
    // }
  });


  //for every resources, if it contains the searchQuery, pull the resources

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
  });


});
