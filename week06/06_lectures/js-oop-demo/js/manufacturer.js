// Beer Library/Manufacturer
function BeerManufacturer(name, location, barrelage, logo, tapRoom, employees) {
  this.name = name,
  this.location = location,
  this.barrelage = barrelage,
  this.logo = logo,
  this.tapRoom = tapRoom,
  this.employees = employees,
  this.beers = []
}

BeerManufacturer.prototype.render = function() {
  $('#manu-name').html(this.name);
};

BeerManufacturer.prototype.addBeer = function(beerInstance) {
  this.beers.push(beerInstance);
};

BeerManufacturer.prototype.renderAllBeers = function() {
  $('#all-the-beers').append('<p>'+this.beers[0].name+'</p>');
};

