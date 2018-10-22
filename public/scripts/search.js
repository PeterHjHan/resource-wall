$(() => {
  var urlParams = new URLSearchParams(window.location.search);
  var urlParamsString = urlParams.get('query');

  $.ajax({
    method: "GET",
    url: "/api/resources",
    data: urlParamsString
  }).then((resources) => {
  for(resource of resources) {
    createResourceElement(resource).appendTo($(".grid"));
  }
  });
});
