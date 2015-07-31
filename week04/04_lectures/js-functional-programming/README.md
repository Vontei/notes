//-----//
// MAP //
//-----//
// Map takes 1 args (optional additional) in its callback
// 1.  Current element in the array

// var myNumbers = [2, 12, 3, 17, 233, 21];

// Traditional For Loop
// var doubleNumbers = []
// for (var i = 0; i < myNumbers.length; i++) {
  // doubleNumbers.push(myNumbers[i] * 2);
// };
// console.log(doubleNumbers)


// // Map callback function
// var doubleDown = function(number, index){
//  // index is an optional argument
//  // console.log('Index : ', index)
//  return number * 2
// }

// // console.log(doubleDown(4);
// var doubleNumbers = myNumbers.map(doubleDown);



//-------//
// FITER //
//-------//
// Filter takes 1 args (optional additional) in its callback
// 1.  Current element in the array

// var fruits = [
//  {
//    name : 'Pineapple',
//    growsOnTree : false
//  },
//  {
//    name : 'Banana',
//    growsOnTree : true
//  },
//  {
//    name : 'Cantaloupe',
//    growsOnTree : false
//  }
// ]

// Tradtional for loop
// var treeFruits = []
// for (var i = 0; i < fruits.length; i++) {
//  if (fruits[i].growsOnTree){
//    treeFruits.push(fruits[i])
//  }
// };

// Filter callback function
// var treeGrower = function(fruit) {
  // Best - most concise return statement
//  return fruit.growsOnTree

  // Better
//  // fruit.growsOnTree ? true : false

  // Good
//  // if (fruit.growsOnTree) {
//  //  return true
//  // }
//  // else {
//  //  return false
//  // }
// }

// var partyFruit = function(fruit){
//  return fruit.name + '!!!!'
// }

// console.log( fruits.filter(treeGrower).map(partyFruit)[0] );

//--------//
// REDUCE //
//--------//
// Reduce takes 2 args(optional additional) in its callback
// 1.  Running Total of the reduction
// 2.  Current element in the array


// var myNumbers = [2, 12, 3, 17, 233, 21];

// // simple addition to our running total
// var summer = function(runningTotal, currentNumber) {
//  return runningTotal + currentNumber
// }
// // remove numbers less than 20
// var removeLessThanTwenty = function(number) {
//  return number > 20
// }

// Can pass in function references in Jquery like we do with map / filter / etc
// $('.my-class').on('click', removeLessThanTwenty)

// We can also pass in anonymous functions as well
// myNumbers.filter(function(number){
//  return number > 20
// })

// console.log('Filter : ', myNumbers.filter(removeLessThanTwenty))

// console.log( myNumbers.filter(removeLessThanTwenty).reduce(summer, 0) );


##Higher Order Functions

###Abstraction

> Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.

vs.

> Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
>
> Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.


**It has to become second nature, for a programmer, to notice when a concept is begging to be abstracted into a new word.**

###Guessing Game Abstraction

Let's take the guessing game problem from last week and attempt to refactor it.

###Array Traversal

We've been doing a lot of array traversal, and so far it's looked something like this:

```
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}
```

Apart from being a bit of an eyesore, this provides a lot of space for potential mistakes.

So we could start by abstracting this code into a new function called `printEach`

```
function printEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}
```

So now we have a function that will loop through the array and `console.log` each element.  This works, but it's not extremely useful. It would be better if we could traverse an array and do something with each element: alert it, double it, uppercase it, etc.

This concept of doing something to every element in an array is a really fundamental idea that we can abstract out into a more general `each` function:

```
function each(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
```
Now, let's use our each function to do something to all the elements in an array:

```
var names = ["Rusty", "Momo", "Wyatt"]

//to alert each name
each(names, alert)

//to console.log each name
each(names, console.log)

```
**Question:** Why don't we add the parentheses after `alert` or `console.log`?

####Anonymous Functions

We don't always have to pass a predefined function to our `each` function.  We can use an anonymous function as an argument as well:

```
var numbers = [3, 7, 22, 39];
each(numbers, function(num){
  console.log(num * 100)
});
```

**Question** Why would we do this?

###The Real ForEach

It turns out that JS now comes with a built in `forEach` function.  Here's how we use it to sum the items in an array

```
var total = 0;
var numbers = [2,5,3,4];

numbers.forEach(function(num){
  total += num;
});

console.log(total)

```

**Exercise** Use `forEach` to find the minimum value in an array

###Higher Order Functions

Higher Order Functions are functions that either

* take other function(s) as arguments
* return other function(s)

`forEach` is an example of a higher order function.

**Exercise** Write a function called `repeat` which takes two arguments: the number of times it should repeat, and a function to call each time.

```
repeat(3, function(x) {
   console.log("HELLO!");
})

//=> "HELLO!"
//=> "HELLO!"
//=> "HELLO!"
```

Here's a function that creates another function:

```
function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```

###Timing Functions

setTimeout:

```
setTimeout(function(){ alert("Hello"); }, 5000);
```

setInterval:

```
setInterval(function(){ alert("WOOF WOOF"); }, 3000);
```

**Exercise** Figure out how to stop an interval.  Basically, how do you turn it off?
