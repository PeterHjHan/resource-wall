$(() => {
  console.log(window.location.pathname);
  const resourceId = window.location.pathname.replace('/resources/', '');

  $('.like').on('click', (e) => {
    console.log('hi');

    $.ajax({
      method: 'POST',
      url: "/api/likes",
      data: {resourceId}
    }).then((results) => {
      console.log($(e.target).css('color'));
        $(e.target).css({
          'color': 'red'
        });
    });
  });

  $(document).on('click', '.clientLike', (e) => {
    let clientResId = $(e.target).attr('id');
    // console.log(clientResId)
    $.ajax({
      method: 'POST',
      url: "/api/likes",
      data: {resourceId: clientResId}
    }).then((results) => {
      console.log('results', results);
      $(e.target).css({
          'color': 'red'
        });
    });
  });
  // $('.grid').masonry({
  //   // options...
  //   itemSelector: '.grid-item',
  //   columnWidth: 20
  // });
});
