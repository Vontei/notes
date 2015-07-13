# Functions Part 1

##Defining a function

```
var greet = function() {
  console.log("Hello World");
};

greet();

```

##Defining a function with a parameter

```
var greeting = function (someName) {
  // anything inside of here will execute when called
  console.log("Good morning " + someName);
};

var name = "Momo";
var name2 = "Rusty";
greeting(name);
greeting(name2);

```


##Why use functions?

###A program that greets people

####Let's greet some instructors

```
var instructor = "Rosa";
console.log("Hello " + instructor); // Hello Rosa

instructor = "Zubair";
console.log("Hello " + instructor); // Hello Zubair
```

####Let's greet some students

```
var student = "David";
console.log("Hello " + student);  // Hello David

student = "Liz";
console.log("Hello " + student); // Hello Liz
```

###So what does this have to do with functions?

The questions we should be asking are:

  1. Did we repeat ourselves in our code?
  2. Can we make our program simpler?
  3. Can we make our program easier to maintain?

![](http://codyburleson.com/wp-content/uploads/2014/11/dontrepeatyourself_motivator_2.jpg)

```

var greeter = function(person) {
  // We can avoid re-writing the same code by placing the repeated code inside of a function
  console.log("Hello " + person);
};

// Now let's greet some instructors...
greeter("Rosa");
greeter("Zubair");

// ... and some students.
greeter("David");
greeter("Liz");

```

###Functions make our code easier to maintain

```
var greeter = function(person) {
  // With just 1 change, we can adjust our program output
  console.log("Bonjour " + person);
};

// Now let's greet some people...
greeter("Buzz Aldrin");
greeter("Stravinsky");

```


##Defining a function with two parameters
```

var greeting = function (taco, stuff) {
  // anything inside of here will execute when called
  console.log("Good morning", stuff, taco);
  console.log("taco:", taco);
  console.log("stuff:", stuff);
};

var name = "Momo";
var name2 = "Rusty";
greeting(name, name2);
greeting(name2, name);
```

##Returning values

```
var sum = function(x,y) {
  return x + y;
}
```
**EXERCISE:** Design an experiment to demonstrate the difference between returning a value in a function and console.logging it

## Named Functions vs Anonymous Functions / Function Declaration Syntax vs Function Expression Syntax

- What's the difference? [Link](http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip).

#Lunch

## Functions afternoon


###Scope

What's the result of running the following code:

```
var sum = function(x,y) {
 var result = x + y
 return result
}

sum(4,5)
console.log(result)

```

###A function with scoped variables

```
var scoped = function(name) {
	var greeting = "Hello " + name + "!";
	return greeting;
};

var hello = scoped("Rusty");
console.log(hello);
```

###Why is variable scope important?
Let's add to the example above to add to our discussion of variable scope.

```

var greeting = "Hello Galvanize";

var scoped = function(name) {
  var greeting = "Hello " + name + "!";
  return greeting;
};

var result = scoped("John Muir");

console.log(result);
console.log(greeting); // What will the output of this line be?
```

###Local vs. Global Scope and the 'var' keyword

```
var greeting = "Hello Galvanize";

var scoped = function(name) {
  greeting = "Hello " + name + "!";
  return greeting;
};

var result = scoped("Henry Hudson");

console.log(result);
console.log(greeting); // What will the output of this line be?
```

###Optional Arguments

```
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

##Cheatsheet Exercise

Pair with a student to create a comprehensive Javascript cheatsheet.  It should cover everything we've talked about in the class so far.


###Functions Writeup

There is more than one way to define a function.  What's the difference between the following 2 methods?

```
function bark() {
  console.log("MEOW");
}
```
and

```
var bark = function() {
  console.log("MEOW");
}
```
