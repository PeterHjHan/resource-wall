
$(() => {
  const resourceId = window.location.pathname.replace('/resources/', '');

  $.ajax({
    method:'GET',
    url: '/api/users'
  }).then((results) => {
    var userId = results.userId;
    if (userId) {
      $('.like').on('click', (e) => {

        $.ajax({
          method: 'POST',
          url: "/api/likes",
          data: {resourceId}
        }).then((results) => {

        });
      });

      $(document).on('click', '.clientLike', (e) => {
        let clientResId = $(e.target).attr('id');
        $.ajax({
          method: 'POST',
          url: "/api/likes",
          data: {resourceId: clientResId}
        }).then((results) => {

        });
      });

      $(document).on('click', '.like', (e) => {
          if ($(e.target).css('color') !== 'rgb(255, 0, 0)') {
            $(e.target).css({
              'color': 'red'
            });
          } else {
            $(e.target).css({
              'color': 'black'
            });
          }
      });

      $(document).on('click', '.clientLike', (e) => {
          if ($(e.target).css('color') !== 'rgb(255, 0, 0)') {
            $(e.target).css({
              'color': 'red'
            });
          } else {
            $(e.target).css({
              'color': 'black'
            });
          }
      });



      $('.like').ready((e) => {

        if (window.location.pathname.slice(0,11) === '/resources/') {
          $.ajax({
            method: 'GET',
            url: "/api/likes",
            data: {resourceId}
          }).then((results) => {
            if (results.results && results.results.user_id === results.userId) {
              $('.like').css({
                'color': 'red'
              });
            } else {
              $('.like').css({
                'color': 'black'
              });
            }
          });
        }
      });
    }
  });


});
