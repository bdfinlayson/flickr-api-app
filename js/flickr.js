$(document).ready(function() {
    var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

    var animal;

    var flickrOptions;

//on form button click
  $('#submitInput').on('click', function(evt) {
    evt.preventDefault();
    console.log('click registered');
    //var $searchButton = $('#submitInput');
    var userInput = $('input:first').val();

    flickrOptions = {
     tags: userInput,
     format: 'json'
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  })

//on animal button click

  $('button').click(function() {

    $('button').removeClass('selected');
    $(this).addClass('selected');

    animal = $(this).text();
    flickrOptions = {
      tags: animal,
      format: 'json'
    };
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  });

function displayPhotos(data) {

  var photoHTML = '<ul>';
  $.each(data.items, function (i,photo) {

    photoHTML += '<li class="grid-25 tablet-grid-50">';
    photoHTML += '<a href=" '+ photo.link +' " class="image">';
    photoHTML += '<img src="' + photo.media.m +'" </a></li>';

  });
  photoHTML += '</ul>';
  $('#photos').html(photoHTML);
}




});
