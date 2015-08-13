var kannah = new BeerManufacturer('Kannah', 'Grand', 10, 'logo', true, 55);

$(document).on('ready', function(){
  kannah.render();
});

$('form').on('submit', function(event){
  event.preventDefault();
  var beerName = $('#beer-name').val();
  var newBeer = new Beer(beerName);
  kannah.addBeer(newBeer);
  kannah.renderAllBeers();
});
