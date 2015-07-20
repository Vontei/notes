var _ = {
  // average - returns the average value in a given array
  average : function (array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total/array.length;
  },
  // contains - returns true if a given value is present in an array
  contains : function (array, num) {
    present = false;
    for (var i = 0; i < array.length; i++) {
      if (num == array[i]) {
        present = true;
      }
    }
    return present;
  },

  // first - returns the first element in an array
  first : function (array) {
      return array[0];
  },

  // last - returns the last element in an array
  last : function (array) {
    return array[array.length -1];
  },

  // max - returns the maximum value in an array
  max : function (array) {
    var maxVal = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maxVal) {
        maxVal = array[i];
      }
    }
    return maxVal;
  },

  // min - returns the minimum value in an array
  min : function (array) {
    var minVal = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] < minVal) {
        minVal = array[i];
      }
    }
    return minVal;
  },

  // shuffle - Returns a shuffled copy of the list, using a version of the
  // Fisher-Yates shuffle.
  shuffle : function (array) {
    var m = array.length;
    while (m) {
      var i = Math.floor(Math.random() * m--);
      var t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  },

  // sample - Produce a random sample from the list. Pass a number to return n
  // random elements from the list. Otherwise a single random item will be returned.
  sample : function (array, num) {
    var shuffleArr = _.shuffle(array);
    if (num == null) {
      num = 1;
    }
    return shuffleArr.slice(0, num)
  },

  //difference - returns the values from array that are not present in the other array.
  difference : function (array1, array2) {
    var diffArr = [];
    for (var i = 0; i < array1.length; i++) {
      if (_.contains(array2, array1[i]) == false) {
        diffArr.push(array1[i]);
      }
    }
    return diffArr;
  },

  // indexOf - Returns the index at which value can be found in the array,
  // or -1 if value is not present in the array.
  indexOf : function (array, num) {
    var present = false;
    for (var i = 0; i < array.length; i++) {
      if (num == array[i]) {
        present = true;
        return i;
      }
    }
    if (present != true) {
      return -1;
    }
  },

  indexOf2 : function (array, num) {
    var present = false;
    if (_.contains(array,num) == false) {
      return -1
    } else {
      for (var i = 0; i < array.length; i++) {
        if (num == array[i]) {
          return i;
        }
      }
    }
  },

  // pluck - extracts a list of property values and returns them in an array.
  pluck : function (array, property) {
    values = [];
    for (var i = 0; i < array.length; i++) {
      values.push(array[i].name);
    }
    return values;
  },
// PART TWO

  //each - iterates over an array and calls a given function with each element
  each : function (array, func) {
  var house = []
    for (i in array) {
    house.push(func(array[i]));
    }
    return house;
  },

  // compact - returns a new array with all provided undefined values removed
  compact : function (array) {
    for (i in array) {
      if (array[i] == undefined) {
        array.splice(i, 1);
      }
    }
    return array
  },

   // map - returns a new array of values produced by running each element of an array through a given function
   map : function (array, func) {
     var newHome = []
     for (i in array) {
       newHome.push(func(array[i]));
     }
     return newHome;
   },

   // filter - Looks through each value in the list, returning an array of all the values that pass a truth test
   filter : function (array, func){
     var newHome = [];
     for (i in array) {
       if (func(array[i]) == true) {
         newHome.push(array[i]);
       }
     }
     return newHome
   }

};

console.log(_.average([4,6,1,1]));
console.log(_.contains([7,55,99], 99));
console.log(_.first([5, 4, 3, 2, 1]));
console.log(_.last([5, 4, 3, 2, 1]));
console.log(_.max([10, 5, 100, 2, 1000]));
console.log(_.min([10, 5, 100, 2, 1000]));
console.log(_.shuffle([1, 2, 3, 4, 5, 6]));
console.log(_.sample([1, 2, 3, 4, 5, 6]));
console.log(_.sample([1, 2, 3, 4, 5, 6], 3));
console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
console.log(_.indexOf([1, 2, 3], 2));
console.log(_.indexOf2([1, 2, 3], 2));
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
console.log(_.pluck(stooges, 'name'));
//part two logs
console.log(_.each([[1,2,3],[1,2,3],[1,2,3]], _.shuffle));
console.log(_.compact([1, "hello", undefined, 3, undefined]));
console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
