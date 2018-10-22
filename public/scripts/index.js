$(() => {

  loadCommonFunctions();

  $.ajax({
    method: "GET",
    url: "/api/resources"
  }).then((resources) => {
    for(resource of resources) {
        createResourceElement(resource).appendTo($(".grid"));
    }
  });
});
