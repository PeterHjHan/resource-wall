$(() => {
  var topicName = window.location.pathname.slice(8);

  loadCommonFunctions();

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources.results) {
      if(resource.topic === topicName)
        createResourceElement(resource, resources.userId).appendTo($(".grid"));
    }
  });
});
