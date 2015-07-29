// add scripts

$(document).on('ready', function() {

  // console.log('sanity check!');

  var heading = $('#first-heading');
  // console.log(heading);

  heading.append('yo');

  // var test = $('.container p').first();
  $('p:eq(3)').append('&nbsp;&nbsp;<span>appending</span>');

  var testClone = heading.clone();
  var testClone2 = $('#delegate');

  // console.log(testClone2.clone());

  // dom traversal

  $('button').on('click', function(){
    // console.log("is this working?");
    // console.log(this);
    // console.log($(this).css('background', 'red'));
    // console.log($(this).siblings());
    // console.log($(this).closest('.container').find('h1'));
  });

  // event delegation

  $('#delegate').on('click', '#minor-btn', function(){
    $('#delegate').append('<p>text</p>');
  });

  $(document).on('click', 'p', function(){
    console.log("test");
    // $(this).remove();
  });

});









