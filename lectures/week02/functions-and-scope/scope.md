# Scope

- What is it? Availability (e.g., where something is accesible)
- Default scope: Global/Window Scope, can be accessed within a child scopes

  ```javascript
  // global/window scope
  var globalVar = 'Michael';
  ```


## Scope

What's the result of running the following code:

```javascript
var sum = function(x,y) {
 var result = x + y
 return result
}

sum(4, 5)
console.log(result)
```

## A function with scoped variables

```javascript
var scoped = function(name) {
	var greeting = "Hello " + name + "!";
	return greeting;
};

var hello = scoped("Rusty");
console.log(hello);
```

Parent vs child? What is available to each?

## Why is variable scope important?
Let's add to the example above to add to our discussion of variable scope.

```javascript
var greeting = "Hello Galvanize";

var scoped = function(name) {
  // hiding
  var greeting = "Hello " + name + "!";
  return greeting;
};

var result = scoped("John Muir");

console.log(result);
console.log(greeting); // What will the output of this line be?
```

## Local vs. Global Scope and the 'var' keyword

```javascript
var greeting = "Hello Galvanize";

var scoped = function(name) {
  // no longer hiding; referencing the parent variable (reassigned)
  greeting = "Hello " + name + "!";
  return greeting;
};

var result = scoped("Henry Hudson");

console.log(result);
console.log(greeting); // What will the output of this line be?
```

## Optional Arguments

```javascript
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

```

## Cheatsheet Exercise

Pair with a student to create a comprehensive Javascript cheatsheet.  It should cover everything we've talked about in the class so far.

### Functions Writeup

There is more than one way to define a function.  What's the difference between the following 2 methods?

```javascript
function bark() {
  console.log("MEOW");
}
```

and

```javascript
var bark = function() {
  console.log("MEOW");
}
```
