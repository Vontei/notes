$(document).ready(function() {

    // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
    $("#secretBox").css("background", "white");
    var $h1 = ('<h1>secret box!</h1>');
    $("#secretBox").append($h1).css("color", "black");

    // Find all child divs of the first row. Set the class for each div to boxType3.
    $('#row1').children().removeClass().addClass("box boxType3");

    // Make the last box in the last row disappear.
    $('.boxType1').last().hide();

    // Change all red boxes to white.
    $('.boxType1').css('background-color', 'white');

    // Get the first two divs in the second row.  Take away all styling from the divs.

    $('#row2 :lt(2)').css("visibility", "hidden");

    // Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

    $(".box").not("#secretBox").css("width", "2px");

    // 1. Add an on click handler to the container div. Console log the x and y position of the click.
    $('#container').on('click', function (event) {
      console.log(event.pageX,event.pageY);
    });

    // Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!
    $(".boxType1").wrap('<a href="http://www.galvanize.com"></a>').on("click", function(event) {
      event.preventDefault();
      alert("you can never leave this page");
    });

  // For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.
  $(".box").on('click', function () {
    if (!$(this).has('img').length){
      $(this).find('img').remove();
    } else {
      $(this).append('<img src= "http://www.ugodog.net/blog/wp-content/uploads/2008/08/golden-retriever-dog.thumbnail.jpg">');
    }
  });

  $('#container').on("click", function(e){
    $('.box').removeAttr('style');
    $('#container').removeAttr("style");
    if($(e.target).hasClass('box') === true) {
      $("#container").css("background", "black");
      $(e.target).css("background", "white");
    } else if ($(this).is('#container') === true){
      $(this).css("background", "limegreen");
    }
  });

});
