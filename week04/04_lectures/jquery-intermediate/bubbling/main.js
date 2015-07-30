$(document).ready(function(){

  // console.log("donuts!");

  $("#outer-div").on('click', function() {
    console.log('outer div!');
  });
  $("#middle-div").on('click', function(event) {
    console.log('middle div!');
    event.stopPropagation();
  });
  $("#inner-div").on('click', function() {
    console.log('inner div!');
  });
  $("#inner2-div").on('click', function() {
    console.log('inner2 div!');
  });

});
