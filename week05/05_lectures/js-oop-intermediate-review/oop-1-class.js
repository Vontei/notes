/*
  Classes are a way to help organize complex logic.
  We use them to define blueprints about data, such
  as a Car class. Each car will share properties like
  number of wheels and color, but the individual cars
  themselves will have different values.
  This file shows how to create a simple Cat class
  as well as defining instances of that class.
*/

// Constructor
var Cat = function(color, age){
  this.color = color;
  this.age = age;
};

// Instances
var blackCat = new Cat('black', 15);
console.log(blackCat);
var orangeCat = new Cat('orange', 39);
console.log(orangeCat);
