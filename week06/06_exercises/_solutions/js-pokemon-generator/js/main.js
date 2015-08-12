$(document).on('ready', function(){
  createPokemon();
});

// create pokemon
function createPokemon() {
  generateName('#name');
  generateTypes('#types');
  generateAbilities('#abilities');
  generateSprite('#sprite');
}


$('#generate').on('click', function() {
  createPokemon();
});
