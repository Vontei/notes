var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "Closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};

Zoo.prototype.open = function() {
  this.status = "Open";
};

Zoo.prototype.close = function() {
  this.status = "Closed";
};

Zoo.prototype.isOpen = function() {
  if (this.status === "Open") {
    return true;
  } else {
    return false;
  }
};

Zoo.prototype.addAnimal = function(animal) {
  if(this.isOpen() && animal instanceof Animal && this.animals.indexOf(animal) === -1) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  if (this.isOpen() && this.animals.indexOf(animal) !== -1) {
    var index = this.animals.indexOf(animal);
    this.animals.splice(index, 1);
  }
};

module.exports = Zoo;
