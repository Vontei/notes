## Today's Goals

Students will...

1. Start *loving* JavaScript!
  - Understand the JavaScript primitives - numbers, strings, booleans, null, undefined
  - Understand the difference between a value and an expression
  - Utilize JS primitives, expressions, and variables in action
  - Write and evaluate grammatical JS statements featuring variables, data types, operators, and values.
1. Learn how to get quick feedback from the JS Console

## 9am Standup

- Events, Helps, Happenings  

## 9:15am Warm-up

- [Type racer](http://play.typeracer.com/)

## 9:30 - Javascript Primer Part 1

With Zach

1. History of Javascript
1. Why Should YOU Care About Javascript?
1. DevTools/JavaScript Console
1. Comments
1. Numbers
1. Strings
1. Booleans
1. Values and Expressions
1. Special Number Operators
1. Variables
1. undefined & null

### History of Javascript

- Not to be confused with Java
- Created in 10 days in May 1995 by [Brendan Eich](http://en.wikipedia.org/wiki/Brendan_Eich)
- It's an exciting time to learn Javascript! It's the language that enables web pages to respond to user interaction beyond the basic level.
- The language today is viewed quite differently than how it was 10 years ago
- [The famous Douglas Crockford gives a thorough introduction of Javascript](https://www.youtube.com/watch?v=t7_5-XYrkqg)

### Why Should YOU Care About Javascript?

- You can use the same language on the front-end and the back-end with Node.js
- Many popular libraries built with JS - jQuery, Underscore.js, etc.
- Javascript allows us to make our pages interactive and dynamic and awesome. If HTML is the skeleton and CSS is the skin, then JavaScript is the heart.
- http://blog.makersquare.com/2015/05/31/the-top-3-reasons-to-learn-javascript/
- Here are some very common uses for JS on the front-end:
  * [Password Strength Meter](http://codepen.io/oscarekholm/pen/zicjg)
  * [Simple Navigation Menu](http://codepen.io/markmurray/pen/efcjp)
  * [Overlay Effects](http://tympanus.net/codrops/2014/02/06/fullscreen-overlay-effects/)
  * [Page Loading Effects](http://tympanus.net/codrops/2014/04/23/page-loading-effects/)
  * [Image Carousel](http://codepen.io/ApplePieNIceCream/pen/DkxIj)
  * [Parallax Scroll and Blur](http://codepen.io/sallar/pen/lobfp)
- Some other more complex uses for JS:
  * [Interactive Music Video](http://lights.helloenjoy.com/)
  * [Jam With Chrome](http://www.jamwithchrome.com/)
  * [Patatap](http://www.patatap.com/)
  * [Arcade Fire Reflektor Music Video](http://www.chromeexperiments.com/detail/just-a-reflektor/?f=)
  * [Walmart Website](http://www.walmart.com/)

### DevTools/Javascript Console

- Allows you to easily interface with your app to run JS commands and display log messages for help with debugging - GET QUICK FEEDBACK!
- Shortcut to open JS console & bring focus to console
  - Mac: Cmd + Opt + I
- Use Tab for autocompletion!

Go to [Google](http://www.google.com) and try pasting the following code into your console:

```javascript
var logo = document.getElementById('hplogo');
logo.onclick = function () { this.src = "http://cdn.howtogeek.com/wp-content/uploads/2010/10/DANCING_BABY.gif"}
```
And then try this:

```javascript
function makeWider() {
  var logo = document.getElementById('hplogo');
  logo.width += 5;
}

setInterval(makeWider, 41.67)
```

Lastly, try this:

```javascript
javascript:document.body.contentEditable='true'; document.designMode='on'; void 0
```

### Comments

Comments come in two forms - line comments and multiline comments

```
// descriptive stuff

/*
  These
  are
  comments on
  many lines
*/

  ```

How do you comment out a line in Atom? What does "comment out" even mean?

### Numbers

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

#### Integers

```
..., -1,0, 2, 3, 4, 5, ...
```
#### Floats (or Decimal numbers)

```
2.718, 3.14, .5, .25
```

### Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", "Jane"
```

### Booleans

A boolean represents logical values - **true** or **false**

```
var catsAreGreat = true;
var dogsRule = false;
```

### Values and Expressions

Values are the simplest components in JavaScript. ```1``` is a value, ```true``` is a value, ```"hello"``` is a value, ```function() {}``` is a value.

Types of values like `Number` or `String` are not very useful without being able to form **Expressions** or **Combinations**.

Try your favorite number operators

```
1 + 1 => 2
2 - 1 => 1
```
You can also create expressions with strings using addition

```
"Hello, " + "world!" => "Hello, world!"
```

This is called **String Concatentation.**

### Special Number Operators

Javascript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

```
// 3^2 becomes
Math.pow(3,2) => 9
// 2^4 becomes
Math.pow(2,4) => 16
```
* Taking a square root

```
// √(4) becomes
Math.sqrt(4) => 2
```

* Need a `random` number? Then use `Math.random`.

```
// The following only returns a random decimal
Math.random() => .229375290430
/**
  The following will return a
  random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```
// Remove the decimal
Math.floor(3.14) => 3
Math.floor(3.9999) => 3
```

### Variables

Having made some expressions it becomes evident we want to store these values.

To store values we use things called **variables**.

The word 'variable' means 'can change' and is used because variables can store many different types of values and can change their value many times.

```
var myNumber = 1;
var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

Variables can also store the result of any "expression".
For example:

```
var x = 2 + 2;
```

or

```
var name = 'Momo';
var greeting = 'Hello' + name;
```

## undefined & null

**undefined**: Represents a value that hasn't been defined

```
var notDefinedYet;
```

A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.

**null**: Represents an explicitly empty value

```
var dogsRule = null;
```

## 12pm Lunch

Food.

## Exercises/Assessments

- Assessment: JavaScript Variables
- Assessment: JavaScript Fundamentals

> In english, we write SENTENCES, composed of WORDS, which have TYPES, (noun, verb, etc.). In Javascript, we write STATEMENTS, composed (mostly) of VALUES, which have TYPES (number, string, etc.)

### Basics

1. Create a blank, valid html5 document.
1. Create a JavaScript file
1. Use `var`, `prompt`, `string` literals, the` +` operator, and `alert` such that when the user opens the page, it will ask them for their name, and then respond with "Hello [NAME_GOES_HERE]!"

## Bonus!

https://autotelicum.github.io/Smooth-CoffeeScript/literate/js-intro.html

## Homework
- Read [Chapter 2](http://eloquentjavascript.net/02_program_structure.html) in Eloquent JS and complete all exercises
