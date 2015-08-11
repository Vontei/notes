$(document).on('ready', function() {


  $('form').on('submit', function(e) {
    e.preventDefault();
    // grab values
    var language = $('#user-language').val();
    var location = $('#user-location').val();
    // create search url
    var searchUrl = 'https://api.github.com/search/users?q=language:'+ language +'+location:'+location;
    // ajax request
    $.ajax({
      url: searchUrl,
      type: 'GET',
      success:function(data){
        for (var i = 0; i < data.items.length; i++) {
          $('#search-results').append('<img src="'+data.items[i].avatar_url+'">');
        }
      },
      error:function(data){
        console.log(data);
      }
    });



  });

});
