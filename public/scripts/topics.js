$(() => {
  var topicName = window.location.pathname.slice(8);

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
      if(resource.topic === topicName) {
        createResourceElement(resource).appendTo($("body"));
      }
    }
  });

  // $('.grid').masonry({
  //   // options...
  //   itemSelector: '.grid-item',
  //   columnWidth: 20
  // });

});
