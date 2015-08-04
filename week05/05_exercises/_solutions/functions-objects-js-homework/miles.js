//## Miles
// 1. Write a function that takes in a `car` object and a `route` object.
// 2. Determine if the car has enough gas to make the entire route (return true or false).

function Car(milesPerGallon, gallonsInTank) {
  this.milesPerGallon = milesPerGallon;
  this.gallonsInTank = gallonsInTank;
}

function Route(miles, destination, location) {
  this.miles = miles;
  this.destination = destination;
  this.location = location;
}

function enoughGas(car, route) {
  var mpg = car.milesPerGallon;
  var gal = car.gallonsInTank;
  var carMiles = gal*mpg;
  console.log(carMiles, route.miles);
  if (carMiles >= route.miles) {
    return true
  } else {
    return false
  }
}

var car1 = new Car(20, 3);
var car2 = new Car(15, 12);
var route1 = new Route(200, "Fox Theatre", "Boulder, CO");
var route2 = new Route(60, "Garden of the Gods", "Colorado Spring, CO");

console.log(enoughGas(car1, route1));
console.log(enoughGas(car1, route2));
console.log(enoughGas(car2, route1));
console.log(enoughGas(car2, route2));
