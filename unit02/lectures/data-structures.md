# Javascript Basics: Arrays and Objects

## Objective

Be able to access and create complex objects. For example

```javascript
var players = [
    {name: 'Curry', number: '30', position: 'point guard'},
    {name: 'Thompson', number: '11', position: 'shooting guard'},
    {name: 'Barnes', number: '40', position: 'small forward'},
    {name: 'Green', number: '23', position: 'power forward'},
    {name: 'Bogut', number: '12', position: 'center'}
];
```

## Arrays

Arrays hold an ordered list of objects in javascript.  Arrays can hold numbers, strings, arrays, other objects, and even functions.

Here are a few examples:

```javascript
var arr = []; // Empty array.  Does not have any data
var arr2 = Array();  // Another way of creating an empty array.
var numbers = [1,2,3,4];  // An array containing numbers
var strings = ["a", "r", "r", "a", "y"];  // An array with strings
var mixed = [1, "b", 88, -2.5, false]; // All types of types

```

### Accessing and modifying arrays

To do more useful things with arrays, we need to be able to put data into them and get data out.  Here is how arrays are accessed:

```javascript
var arr = [5,4,3,2,1];
arr[0]; // Returns 5
arr[4]; // Returns 1
arr.length // The length of the array.  Returns 5 in this case

var arrOfArrs = [ [1,2,3], [4,5,6], [7,8,9] ];
arr[0][0];  // Returns 1
arr[0];     // Returns an array, [1,2,3];
arr[2][0];  // Returns 7

```

You'll notice that accessing arrays is very similar to accessing characters in a string.

Next, here's a few functions available to arrays for adding and removing data:

```javascript
var arr = ['a', 'b', 'c'];
arr.push('d');  // array is now ['a', 'b', 'c', 'd']
arr.pop();      // Array is now back to ['a', 'b', 'c']

arr.shift();    // Array is now ['b', 'c']
arr.unshift('z');   // Array is now ['z', 'b', 'c'];
arr.unshift('q');   // Array is now ['q', 'z', 'b', 'c'];
```

### Exercise

Look up splice and figure out how to remove the 3rd element from our array.

## Objects

Objects are the building blocks of javascript.  You can make very complex structures out of objects.  They are very similar to arrays, except that the accessor doesn't have to be a number.  Here is a simple example:

```javascript
var myObj = {}; // Creates an empty object literal
var myObj2 = { name : "Tim", position: "Instructor", pet: "Moxie"};
myObj2['pet'];  // returns the string "Moxie"
myObj2.pet;   // Also returns the string "Moxie"

var person = { name : "Tim", interests: ["sailing", "coding", "ultimate frisbee"] };
person.interests[1];   // What does this return?
```

### Exercise
Use the following object:

```javascript
var players = [
    {name: 'Curry', number: '30', position: 'point guard'},
    {name: 'Thompson', number: '11', position: 'shooting guard'},
    {name: 'Barnes', number: '40', position: 'small forward'},
    {name: 'Green', number: '23', position: 'power forward'},
    {name: 'Bogut', number: '12', position: 'center'}
];
```

Write the javascript code to print the following:

1. Thompson's number
2. Green's position
3. The entire object that represents Curry.

## Objects and Functions

Objects can save primitive types like numbers, bools, strings, etc, but objects can also save functions.

Just like a function can be saved to a variable:

```javascript
var helloWorld = function() { console.log("Hello World"); };
```

A function can also be saved inside an object:

```javascript
var calculator = { add : function (left, right) { return left + right } };
calculator.add(3, 4);    // Returns 7
```

Now that calculator has been created, it's easy to add new functionality:

```javascript
calculator.subtract = function(left, right) { return left - right };
calculator.subtract(6, 4);  // Returns 2
```

### Exercise

Create an object that takes a series of numbers as an array and can find the average and the max.
