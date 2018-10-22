$(() => {
  // console.log(window.location.pathname);
  // const resourceId = window.location.pathname.replace('/resources/', '');


  $(document).on('click', '.rating', (e) => {
    let ratingNum = $(e.target).attr('name');
    let ratingResId = $(e.target).attr('res');
    console.log(ratingNum);
    $.ajax({
      method: 'POST',
      url: "/api/ratings",
      data: {
        resourceId: ratingResId,
        ratingNum: ratingNum
      }
    }).then((results) => {
      console.log('results', results);
      $(e.target).css({
          'color': 'yellow'
        });
    });
  });
});
