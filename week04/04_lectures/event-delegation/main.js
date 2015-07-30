$(document).ready(function() {

  console.log( "ready!" );

  $('ul').on('click', 'a', function(event) {
    console.log($(event.target));
  });

});
