# JavaScript Functions - part 3

1. Using the Yeoman [generator-galvanize-html](https://github.com/gSchool/generator-galvanize-html), generate a project boilerplate.
1. Solve each of the given problems, creating a function that properly *returns* a value. Then `console.log` the result of the function to the JavaScript console outside the function.
1. STRETCH: Utilize TDD. Write test cases/specs first with [Jasmine](http://jasmine.github.io/). Run each test/spec to ensure that it fails. Write just enough code to get the test/spec to pass. Refactor (if necessary).

### Example

```javascript
function test(str) {
  return "test" + str
}

console.log(test("ing"))
```

## Problems

1. Define a function called `getStudentName` that takes a single object as an argument and returns the value of the `name` property/key.

  ```javascript
  var studentName = {name: 'Michael', age: 27 };
  getStudentName(studentName); // => Michael
  ```

1. Define a function called `getTotalLetters` that takes an array of strings as an argument and returns the total number of letters in all strings.

  ```javascript
  var stringArray = ['javascript', 'is', 'not', 'python'];
  getTotalLetters(stringArray); // => 21
  ```

1. Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.

  ```javascript
  createObject('city', 'Boulder'); // => {city: 'Boulder'}
  ```

1. Define a function called `getNegativeIndex` that takes an array and a negative number as arguments and returns the value from the array at the given negative index.

  ```javascript
  var letterArray = ['a', 'b', 'c', 'd', 'e'];
  getNegativeIndex(letterArray, -3); // => c
  ```

1. Define a function called `removeCharacter` that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.

  ```javascript
  removeCharacter('javascript', 'a'); // => jvscript
  removeCharacter('javascript', '1'); // => javascript
  removeCharacter('12345', '2'); // => 1345
  ```

1. Define a function called `outputObject` that takes an object as an argument and returns each key-value pair in the following format 'key .

  ```javascript
  var ages = {john: 10, jerry: 11, jenny: 12 };
  outputObject(ages); // => john is 10, jerry is 11, jenny is 12
  ```

1. Define a function called `getVowels` that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.

  ```javascript
  getVowels('javascripting'); // => ['a', 'i']
  ```

1. Define a function called `captureTwins` that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.

  ```javascript
  captureTwins(['m', 'm', 'n', 'n', 's', 's']); // => true
  captureTwins(['m', 'm', 'm', 'n', 's', 's']); // => false
  ```

1. Define a function called `testBooleanLogic` that takes an array of boolean values and returns true if any value is true.

  ```javascript
  testBooleanLogic([false, true, false, false]); // => true
  testBooleanLogic([false, false, false]); // =>  false
  ```

1. Define a function called `getUniqueValues` that takes an array of strings, and returns a new array consisting of the unique values.

  ```javascript
  getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']); // => ['m', 'n', 'r', 's']
  getUniqueValues(['michael', 'ben', 'kerry', 'ben']); // => ['michael', 'ben', 'kerry']
  ```
