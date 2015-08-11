// *** Call and Apply *** //


 // Mammal Constructor
function Mammal(name, age){
  this.name = name;
  this.age = age;
  this.offspring = [];
}

// Mammal Methods
Mammal.prototype.procreate = function(){
  var createOffsprint = new Mammal("Baby "+ this.name);
  this.offspring.push(createOffsprint);
};
Mammal.prototype.toString= function() {
  for (var i = 0; i < this.offspring.length; i++) {
    console.log(offspring[i].this.name);
  }
};

var someMammal = new Mammal('Chester', 22);
console.log(someMammal);


function Dog(){
  // console.log(arguments);
  // this.name = name;
  Mammal.call(this, name, age);
  Mammal.apply(this, arguments);
}

Dog.prototype = new Mammal();

var becky = new Dog("becky", 8);
console.log(becky);

