#Underscore Lab

You're going to recreate some of the functionality of the popular JS library Underscore.js.  Write all of the following methods inside of an `_` object.

##Part 1

* average - returns the average value in a given array

```
_.average([4,6,1,1])
=> 3
```

* contains - returns true if a given value is present in an array

```
_.contains([7,55,99], 99);
=> true
```

* first - returns the first element in an array

```
_.first([5, 4, 3, 2, 1]);
=> 5
```

* last - returns the last element in an array

```
_.last([5, 4, 3, 2, 1]);
=> 1
```

* max - returns the maximum value in an array


```
var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
=> 1000
```

* min - returns the minimum value in an array

```
var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);
=> 2
```

* shuffle - Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.  Don't worry about implementing that exact shuffle alogrithm.  Start by creating your own simple shuffle.

```
_.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
```


* sample - Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.


```
_.sample([1, 2, 3, 4, 5, 6]);
=> 4

_.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
```

* difference - returns the values from array that are not present in the other array.

```
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
```

* indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

```
_.indexOf([1, 2, 3], 2);
=> 1
```


* pluck - extracts a list of property values and returns them in an array.

```
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
```

##Part 2

* each - iterates over an array and calls a given function with each element

```
_.each([1, 2, 3], alert);
=> alerts each number in turn...
```

* compact - returns a new array with all provided undefined values removed

```
_.compact([1, "hello", undefined, 3, undefined]);
=> [1, "hello", 3]
```

* map - returns a new array of values produced by running each element of an array through a given function

```
_.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]

_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
=> ["DOGS", "BEFORE", "CATS"]

```

* filter - Looks through each value in the list, returning an array of all the values that pass a truth test

```
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
```
