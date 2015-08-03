// Define a function called `getStudentName` that takes a single object as an
// argument and returns the value of the `name` property/key.
function getStudentName(obj) {
  return obj.name;
}

var studentName = {name: 'Michael', age: 27 };
console.log(getStudentName(studentName));
console.log(getStudentName(studentName) === 'Michael');


// Define a function called `getTotalLetters` that takes an array of strings as
// an argument and returns the total number of letters in all strings.
function getTotalLetters(arr) {
  return arr.join('').length;
}

var stringArray = ['javascript', 'is', 'not', 'python'];
console.log(getTotalLetters(stringArray));
console.log(getTotalLetters(stringArray) === 21);


// Define a function called 'createObject' that takes two arguments
// and returns a new object with a key of the firstargument and the value of the second argument.
function createObject(key, value) {

  var newObject = {};
  newObject[key] = value;
  return newObject;
}

console.log(createObject('city', 'Boulder'));


// Define a function called `getNegativeIndex` that takes an array and a
// negative number as arguments and returns the value from the array
// at the given negative index.
function getNegativeIndex(arr, index) {
  // var reversedArray = arr.reverse();
  // var newIndex = -index - 1;
  // return reversedArray[newIndex];
  return arr[index + arr.length];
}

var letterArray = ['a', 'b', 'c', 'd', 'e'];
console.log(getNegativeIndex(letterArray, -3));
console.log(getNegativeIndex(letterArray, -3) === 'c');


// Define a function called `removeCharacter` that takes a string
// and a single character (string or integer) as arguments and
// returns the string with the characters removed.
// Do not modify the original string.
// STRETCH: Write a test case for this last requirement.
function removeCharacter(str, character) {
  var splitString = str.split("");
  var newArray = [];
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].toLowerCase() !== character) {
      newArray.push(splitString[i]);
    }
  }
  return newArray.join("");
}

console.log(removeCharacter('javascript', 'a'));
console.log(removeCharacter('javascript', 'a') === 'jvscript');
console.log(removeCharacter('javascript', '1'));
console.log(removeCharacter('javascript', '1') === 'javascript');
console.log(removeCharacter('12345', '2'));
console.log(removeCharacter('12345', '2') === '1345');


// Define a function called `ouputObject` that takes an object as an argument
// and returns each key-value pair in the following format 'key .
function outputObject(obj) {
  tempArray = [];
  for(var value in obj) {
    var newString = value + ' is ' + obj[value];
    tempArray.push(newString);
  }
  return tempArray.join(', ');
}

var ages = {john: 10, jerry: 11, jenny: 12 };
console.log(outputObject(ages));


// Define a function called `getVowels` that takes a string as an argument and
// returns an array of all the vowels in the string. Do not include duplicates.
function getVowels(str) {

  // var theVowels = null;
  // if (Math.round(Math.random()) === 1) {
  //   theVowels = ['a', 'e', 'i', 'o', 'u'];
  // } else {
  //   theVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // }

  theVowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function(letter) {
    if(theVowels.indexOf(letter) >= 0 ) {
      return true;
    }
  });
}

function removeDuplicates(arr) {
  var output = [];
  var testObject = {};

  for (var i = 0; i< arr.length; i++) {
    testObject[arr[i]]=0;
  }
  for (var value in testObject) {
    output.push(value);
  }
  return output;
}

vowelArray = getVowels('javascripting');
console.log(removeDuplicates(vowelArray));


// Define a function called `captureTwins` that takes an array as an argument
// and returns true if every adjacent pair of items in the array is the same,
// otherwise return false.
function captureTwins(arr) {
  if (arr.length % 2 !== 0) {
    return false;
  } else {
    while(arr.length > 0) {
      var element = arr.shift();
      if(element !== arr[0]) {
        return false;
      }
      arr.shift();
    }
    return true;

  }
}

console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's']) === true);
console.log(captureTwins(['m', 'm', 'm', 'n', 's', 's']) === false);


// Define a function called `testBooleanLogic` that takes an array of
// boolean values and returns true if any value is true.
function testBooleanLogic(arr) {
  if (arr.length === 0) {
    return false;
  } else {
    if(arr.indexOf(true) >= 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(testBooleanLogic([false, true, false, false]) === true);
console.log(testBooleanLogic([false, false, false]) === false);


// Define a function called `getUniqueValues` that takes an array of strings,
// and returns a new array consisting of the unique values.
function getUniqueValues(arr) {
  var uniqueArray = [];
  arr.forEach(function(item) {
    if(uniqueArray.indexOf(item) === -1) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}

console.log(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']));
console.log(getUniqueValues(['michael', 'ben', 'kerry', 'ben']));


// exporting for testing
module.exports = {
  getStudentName: getStudentName,
  getTotalLetters: getTotalLetters,
  createObject: createObject,
  getNegativeIndex: getNegativeIndex,
  removeCharacter: removeCharacter,
  outputObject: outputObject,
  getVowels: getVowels,
  captureTwins: captureTwins,
  testBooleanLogic: testBooleanLogic,
  getUniqueValues: getUniqueValues,
  removeDuplicates: removeDuplicates
};
