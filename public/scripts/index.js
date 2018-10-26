$(() => {

  loadCommonFunctions();

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources.results) {
        createResourceElement(resource, resources.userId).appendTo($(".grid"));
    }
  });

});
