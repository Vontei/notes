// generate random number, based on 718 total pokemon from the API
function generateRandomNumber(){
  return (Math.floor( Math.random() * (718 - 0 + 1) + 0)).toString();
}

// random pokemon name
function generateName(id) {
  var generateurl = 'http://pokeapi.co/api/v1/pokemon/' + generateRandomNumber();
  $.ajax({
    type: 'GET',
    url: generateurl,
    dataType: 'jsonp',
    success: function(data){
      $(id).text(data.name);
    }
  });
}

// random pokeon types
function generateTypes(id) {
  var generateurl = 'http://pokeapi.co/api/v1/pokemon/' + generateRandomNumber();
  $.ajax({
    type: 'GET',
    url: generateurl,
    success: function(data){
      $(id).text(data.types[0].name);
    }
  });
}

// random pokemon abilities
function generateAbilities(id) {
  var generateurl = 'http://pokeapi.co/api/v1/pokemon/' + generateRandomNumber();
  $.ajax({
    type: 'GET',
    url: generateurl,
    success: function(data){
      $(id).html(' ');
      for (var i = 0; i < data.abilities.length; i++) {
        $(id).append('<li>' + data.abilities[i].name + '</li>');
      }
    }
  });
}

// random pokemon image
function generateSprite(id) {
  var generateurl = 'http://pokeapi.co/api/v1/sprite/' + generateRandomNumber();
  $.ajax({
    type: 'GET',
    url: generateurl,
    success: function(data){
      var href = 'http://pokeapi.co' + data.image;
      $(id).attr('src', href);
    }
  });
}
