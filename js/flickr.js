$(document).ready(function() {

  $('button').click(function() {

    $('button').removeClass('selected');
    $(this).addClass('selected');

    var flickerAPI = 'http://api.flicker.com/services/feeds/photos_public.gne?jsoncallback=?';
    var animal = $(this).text();
    var flickerOptions = {
      tags: animal,
      format: 'json'
    };

    function displayPhotos(data) {

    }

    $.getJSON(flickerAPI, flickerOptions, displayPhotos);


  });
});
