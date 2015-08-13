// Beer Constructor
function Beer(name, abv, ibu, style, image) {
  this.name = name,
  this.abv = abv || 5,
  this.ibu = ibu || 40,
  this.style = style || 'lager',
  this.image = image || 'sorry.'
}

// Beer Methods

Beer.prototype.createElement = function() {
  var $element = $('<div>'+this.name+'</div>');
  return $element;
};

// var amber = new Beer('test', 1, 2, "lager", "none");
// console.log(amber.createElement());






