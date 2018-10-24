$(() => {

  $(document).on('click', '.rating', (e) => {
    let ratingNum = $(e.target).attr('name');
    let ratingResId = $(e.target).attr('res');
    $.ajax({
      method: 'POST',
      url: "/api/ratings",
      data: {
        resourceId: ratingResId,
        ratingNum: ratingNum
      }
    }).then((results) => {
      $(e.target).css({
          'color': 'yellow'
        });
    });
  });
});
