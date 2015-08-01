$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2><button class="btn btn-danger btn-sm">X</button>&nbsp;'+toDo+
      '</h2></li>');
    $('#all-todos').css('list-style-type', 'none');
    $('input:text').val('');
  });

  $(document).on('click', 'li', function(event){
    $(this).remove();
  });

});
