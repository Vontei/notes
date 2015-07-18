# Functions Part 1

## Defining a function

```javascript
var greet = function() {
  console.log("Hello World");
};

greet();
```

## Defining a function with a parameter

```javascript
var greeting = function (someName) {
  // anything inside of here will execute when called
  console.log("Good morning " + someName);
};

var name = "Momo";
var name2 = "Rusty";
greeting(name);
greeting(name2);
```


## Why use functions?

### Let's greet some instructors

```javascript
var instructor = "Rosa";
console.log("Hello " + instructor); // Hello Rosa

instructor = "Zubair";
console.log("Hello " + instructor); // Hello Zubair
```

### Let's greet some students

```javascript
var student = "David";
console.log("Hello " + student);  // Hello David

student = "Liz";
console.log("Hello " + student); // Hello Liz
```

## So what does this have to do with functions?

The questions we should be asking are:

  1. Did we repeat ourselves in our code?
  2. Can we make our program simpler?
  3. Can we make our program easier to maintain?

![](http://codyburleson.com/wp-content/uploads/2014/11/dontrepeatyourself_motivator_2.jpg)

```javascript
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

```javascript
var greeter = function(person) {
  // With just 1 change, we can adjust our program output
  console.log("Bonjour " + person);
};

// Now let's greet some people...
greeter("Buzz Aldrin");
greeter("Stravinsky");
```


## Defining a function with two parameters

```javascript
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

## Returning values

```javascript
var sum = function(x,y) {
  return x + y;
}
```
**EXERCISE:** Design an experiment to demonstrate the difference between returning a value in a function and console.logging it

## Named Functions vs Anonymous Functions / Function Declaration Syntax vs Function Expression Syntax

- What's the difference? [Link](http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip).
