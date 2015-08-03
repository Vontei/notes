$(document).on('ready', function() {

  // Initial values
  var enteredPage = new Date();
  var totalScrolled = 0;
  var totalDistance = 0;
  var totalTimeNavbar = 0;
  var totalTimeBlogPost1 = 0;
  var totalTimeBlogPost2 = 0;
  var totalTimeBlogPost3 = 0;
  var largestPercentSeen = 0;
  var largestDistance = 0;
  var longestTime = 0;

  $(window).on('scroll', function(){

    // Calculate scroll top, window height, and document height
    var $wintop = $(window).scrollTop();
    var $docheight = $(document).height();
    var $winheight = $(window).height();

    // Calculate percent seen
    var $percentseen = ($wintop/($docheight-$winheight)*100).toFixed(2);
    if (parseFloat($percentseen) >= largestPercentSeen) {
      largestPercentSeen = $percentseen;
    }

    // Calculate distance seen
    var $distance = ($wintop*0.026458333).toFixed(2);
    if (parseFloat($distance) >= largestDistance) {
      largestDistance = $distance;
    }

  });


  // Handle metric button click
  $('#btn-metrics').on('click', function(){

    // Calculate times
    var $minutesSpent = ((new Date() - enteredPage)/1000).toFixed(2);

    $('#percent-seen').html(largestPercentSeen+'%');
    $('#distance').html(largestDistance+'mm');
    $('#page-time').html($minutesSpent +' seconds');
    $('#nav-time').html((totalTimeNavbar/1000).toFixed(2)+' seconds');
    $('#blog1-time').html((totalTimeBlogPost1/1000).toFixed(2)+' seconds');
    $('#blog2-time').html((totalTimeBlogPost2/1000).toFixed(2)+' seconds');
    $('#blog3-time').html((totalTimeBlogPost3/1000).toFixed(2)+' seconds');

  });


  // Handle CTA button click
  $('.cta-btn').one('click', function(){
    var $minutesSpent = ((new Date() - enteredPage)/1000).toFixed(2);
    $('#cta-time').html('<p>It took ' + $minutesSpent + ' seconds to click');
  });

  // Track time in blogpost1
  $(".navbar").on("mouseenter", function(){
    var mastEnter = new Date();
    // Save the mouseenter
    var that = $(this);
    $(this).on("mouseleave", function(){
      var mastLeave = new Date();
      // Kill the event listener from the mouseenter
      that.off("mouseleave");
      totalTimeNavbar += (mastLeave - mastEnter);
    });
  });

  // Track time in blogpost1
  $(".blogPost1").on("mouseenter", function(){
    var mastEnter = new Date();
    // Save the mouseenter
    var that = $(this);
    $(this).on("mouseleave", function(){
      var mastLeave = new Date();
      // Kill the event listener from the mouseenter
      that.off("mouseleave");
      totalTimeBlogPost1 += (mastLeave - mastEnter);
    });
  });

  // Track time in blogpost2
  $(".blogPost2").on("mouseenter", function(){
    var mastEnter = new Date();
    // Save the mouseenter
    var that = $(this);
    $(this).on("mouseleave", function(){
      var mastLeave = new Date();
      // Kill the event listener from the mouseenter
      that.off("mouseleave");
      totalTimeBlogPost2 += (mastLeave - mastEnter);
    });
  });


  // Track time in blogpost3
  $(".blogPost3").on("mouseenter", function(){
    var mastEnter = new Date();
    // Save the mouseenter
    var that = $(this);
    $(this).on("mouseleave", function(){
      var mastLeave = new Date();
      // Kill the event listener from the mouseenter
      that.off("mouseleave");
      totalTimeBlogPost3 += (mastLeave - mastEnter);
    });
  });

});
