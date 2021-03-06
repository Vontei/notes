# Functional Programming

## Abstraction

Which is easier to read?

> Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.

vs.

> Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
>
> Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.


**It has to become second nature, for a programmer, to notice when a concept is begging to be abstracted into a new word.**

## Functional vs Procedural Approaches

Functional programming manipulates values, while procedural executes commands.

### Example

```javascript
// *** procedural approach *** //
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 10;
}
console.log('Procedural', numbers.join(', '));

// *** functional approach *** //
var numbers = [1, 2, 3, 4, 5];
var numberTimesTen = function(numArray) {
  var outputNumbers = [];
  for (var i = 0; i < numArray.length; i++) {
    outputNumbers.push(numArray[i] * 10);
  }
  return outputNumbers;
};
console.log('Functional', numberTimesTen(numbers).join(', '));
```

## Array Traversal

We've been doing a lot of array traversal, and so far it's looked something like this:

```javascript
var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

Apart from being a bit of an eyesore, this provides a lot of space for potential mistakes.

So we could start by abstracting this code into a new function called `printEach`

```javascript
function printEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}
```

So now we have a function that will loop through the array and `console.log()` each element. This works, but it's not extremely useful. It would be better if we could traverse an array and do something with each element - e.g., alert it, double it, uppercase it, etc.

This concept of doing something to every element in an array is a really fundamental idea that we can abstract out into a more general `each` function:

```javascript
function each(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
```

Now, let's use our each function to do something to all the elements in an array:

```javascript
var names = ["Rusty", "Momo", "Wyatt"]

//to alert each name
each(names, alert)

//to console.log each name
each(names, console.log)

```
**Question:** Why don't we add the parentheses after `alert` or `console.log`?

## Anonymous Functions

We don't always have to pass a predefined function to our `each()` function. Instead, We can use an anonymous function as an argument as well:

```javascript
var numbers = [3, 7, 22, 39];

each(numbers, function(num){
  console.log(num * 100)
});
```

**Question** Why would we do this?

### The Real ForEach

It turns out that JS now comes with a built in `forEach()` function. Here's how we use it to sum the items in an array:

```javascript
var total = 0;
var numbers = [2,5,3,4];

numbers.forEach(function(num){
  total += num;
});

console.log(total)

```

**Exercise** Use `forEach` to find the minimum value in an array

## Higher Order Functions

Higher Order Functions are functions that either

- take other function(s) as arguments
- return other function(s)

`forEach` is an example of a higher order function.

**Exercise** Write a function called `repeat` which takes two arguments: the number of times it should repeat, and a function to call each time.

```javascript
repeat(3, function(x) {
   console.log("HELLO!");
})

//=> "HELLO!"
//=> "HELLO!"
//=> "HELLO!"
```

Here's a function that creates another function:

```javascript
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```

## Map, Filter, and Reduce

Test these examples...

### Map

Goal: Given an array of numbers, return an array where each number is multiplied by two.

```javascript
var numbers = [2, 12, 3, 17, 233, 21];

// Traditional For Loop

var doubleNumbers = []

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
};
console.log(doubleNumbers)


// Map callback function

var doubleDown = function(number, index){
 // index is an optional argument
 // console.log('Index : ', index)
 return number * 2
}

console.log(doubleDown(4);
var doubleNumbers = numbers.map(doubleDown);
```

### Filter

Goal: Given an array of objects, where each object cantains a car make and whether or not it is made in the United States, return an array of objects containing only cars manufactured in the United States.

```javascript
var cars = [
 {
   make: 'Ford',
   madeInUnitedStates: true
 },
 {
   make: 'GM',
   madeInUnitedStates: true
 },
 {
   make: 'Honda',
   madeInUnitedStates: false
 }
]

// Traditional For Loop

var domesticCars = []

for (var i = 0; i < cars.length; i++) {
 if (cars[i].madeInUnitedStates){
   domesticCars.push(cars[i])
 }
};

// Filter callback function

var domesticManufacturer = function(car) {
  return car.madeInUnitedStates
}

var singleCar = function(car){
  return car.make
}

console.log(cars.filter(domesticManufacturer).map(singleCar)[0]);
```

### Reduce

Reduce takes 2 args (optional additional) in its callback:
1. Running Total of the reduction
2. Current element in the array

```javascript
var allNumbers = [2, 12, 3, 17, 233, 21];

// add the numbers to the running total
var total = function(runningTotal, currentNumber) {
 return runningTotal + currentNumber
}

// remove numbers less than 10
var removeLessThanTen = function(number) {
  return number > 10
}

console.log('Filter: ', allNumbers.filter(removeLessThanTen))
console.log(allNumbers.filter(removeLessThanTen).reduce(total, 0));
