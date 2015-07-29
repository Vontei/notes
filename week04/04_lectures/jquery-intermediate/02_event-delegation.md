// Delegated Events
  // Allows a parent container to watch its descendents for a specific event / target combination
  // if an element matching the target selector is the origin for the event, the callback fires
  $('#delegate').on('click', '.my-button', function(){
    $('#delegate').append('<button class="my-button">This a new button!!</button>')
  });
