# Objecting-oriented Programming - intro

Object-oriented Programming (OOP) is a type of programming paradigm that uses abstractions to model real-world models, called Classes. In essence, OOP organizes code into numerous pieces of code that all work together.

One the main benefits of OOP is modularity. You do *not* have to understand every single line of code in your code base. If you define a Class in one file, you just need to know how to create an instance of that class. In other words, you just need to know the Class name and its associated properties and paremeters - not all of the code in the class.

## Key terms

- Constructor function
- The `new` keyword

## Steps

Scaffold out a new project from the generator and follow along with the examples...

### Constructor Function

Let's start by creating our first Class.

```javascript
// Base Class
var Vehicle = function(){
  // properties
  this.wheels = 4;
  this.color = 'black'
}

// Instances
var blackCar = new Vehicle();
console.log(blackCar);
```

**How do we make this dynamic?**


```javascript
// Base Class
var Vehicle = function(numberOfWheels, carColor){
  // properties
  this.wheels = numberofWheels;
  this.color = carColor;
}

// Instances
var car = new Vehicle(4, 'red');
console.log(car);
```

**So...**

1. The properties are like nouns
1. You can think of the constructor like a blueprint. It's not the *actual* vehicle.


### Methods

methods - honk, move





base class (common functionality)
  sub class (override or inherent)

