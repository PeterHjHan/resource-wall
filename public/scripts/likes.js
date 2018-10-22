
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

  $('.like').ready((e) => {
    console.log('hi', resourceId);

    $.ajax({
      method: 'GET',
      url: "/api/likes",
      data: {resourceId}
    }).then((results) => {
      if (results) {
        $('.like').css({
          'color': 'red'
        });
      } else {
        $('.like').css({
          'color': 'black'
        });
      }
    });
  });



  // $(document).on('DOMNodeInserted', (e) => {
  //   let clientResId = $('.clientLike').attr('id');
  //   console.log('ohhi', clientResId);

  //   $.ajax({
  //     method: 'GET',
  //     url: "/api/likes",
  //     data: {resourceId}
  //   }).then((results) => {
  //     // console.log(results);
  //       $('.clientLike').css({
  //         'color': 'red'
  //       });
  //   });
  // });

  // $(document).on('click', '.clientLike', (e) => {
  //   let clientResId = $(e.target).attr('id');
  //   // console.log(clientResId)
  //   $.ajax({
  //     method: 'POST',
  //     url: "/api/likes",
  //     data: {resourceId: clientResId}
  //   }).then((results) => {
  //     console.log('results', results);
  //     $(e.target).css({
  //         'color': 'red'
  //       });
  //   });
  // });
  // $('.grid').masonry({
  //   // options...
  //   itemSelector: '.grid-item',
  //   columnWidth: 20
  // });
});
