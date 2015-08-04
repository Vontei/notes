// ## Rides
// 1. Write a function that takes a ride object and a child object as arguments
// 2. Determine if the child is tall enough for the ride (the function should return true or false)

function Child(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
}

function Ride(minHeight, maxHeight) {
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
}

function canRide(child, ride) {
  if (child.height >= ride.minHeight && child.height <= ride.maxHeight) {
    return true;
  } else {
    return false;
  }
}

var child1 = new Child(3, "Julian", 3);
var child2 = new Child(4, "Cero", 4);

var ride1 = new Ride(3, 7);
var ride2 = new Ride(4,7);

console.log(canRide(child1, ride1));
console.log(canRide(child1, ride2));
console.log(canRide(child2, ride1));
console.log(canRide(child2, ride2));
