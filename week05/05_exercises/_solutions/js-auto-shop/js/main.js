function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.state = 'off';
  this.current_owner = 'manufacturer';
  this.previous_owners = [];
  this.passengers = []
}
Car.prototype.sale = function(current_owner) {
  this.previous_owners.push(this.current_owner);
  this.current_owner = current_owner;
};

Car.prototype.paint = function(color) {
  this.color = color;
}

Car.prototype.start = function() {
  this.state = "on";
}

Car.prototype.off = function() {
  this.state = "off";
}

Car.prototype.drivesTo = function(destination) {
  if (this.state == "on") {
    console.log("Driving to " + destination);
  } else {
    console.log("Sorry, this car is off");
  }
}

Car.prototype.park = function() {
  if (this.state == "off") {
    console.log("Parked!");
  } else {
    console.log("Sorry, the car is still on");
  }
}

Car.prototype.pickup = function(name) {
  if (this.state == "on") {
    this.passengers.push(name);
    console.log("Driving to pick up " + name)
  } else {
    console.log("Sorry, the car is still off");
  }
}

Car.prototype.dropoff = function(name) {
  var index = this.passengers.indexOf(name)
  if (this.state !== "on") {
    console.log("Sorry, this car is off");
  }
  if (index != -1) {
    this.passengers.splice(index, 1)
    console.log(name + " has been dropped off");
  } else {
    console.log(name + " was never picked up");
  }
}
