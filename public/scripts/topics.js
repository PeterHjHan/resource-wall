$(() => {
  var topicName = window.location.pathname.slice(8);

  loadCommonFunctions();

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
      if(resource.topic === topicName) {
        createResourceElement(resource).appendTo($(".grid"));
      }
    }
  });
});
