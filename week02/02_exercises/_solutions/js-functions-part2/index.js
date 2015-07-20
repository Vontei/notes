/* Define a function called `oldestPerson` that takes an object with names as
 keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns
 the name of the oldest living person. */

function oldestPerson(obj) {
  var oldest = 0;
  var name;
  for (key in obj) {
    if (obj[key] > oldest) {
      oldest = obj[key];
      name = key;
    }
  }
  return name;
}

var people = {'Chuck': 22, 'Brian': 46};
console.log(oldestPerson(people))

/* Define a function called `longestWord` that takes a string and returns the
 longest word in the string. */
/* Refactor the `longestWord` function so that it ignores punctuation. */

function longestWord(string) {
  // logic to remove punctuation
  string = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  string = string.replace(/\s{2,}/g," ");
  // longest word logic
  var words = string.split(' ');
  var longest = "";
  for (i in words) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord("This, right here, is my, string!"));

/* Define a function called `factorial` that takes a random number as an
 argument and then returns the factorial of that given number. */

function factorial(num) {
  var numbers = [];
  var sum = 1;
  for (var i = 1; i <= num; i++) {
    numbers.push(i);
  }
  for (i in numbers) {
    sum = sum * numbers[i];
  }
  return sum;
}

console.log(factorial(9))

/* **Bonus**: Write a function called `palindrome` that takes a string as an
 argument and returns the string in reversed order. Return true if the string is
 the same as the reversed string, otherwise return false. */

function palindrome(string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse.toLowerCase() == string.toLowerCase()) {
    return reverse + " - " + true;
  } else {
    return reverse + " - " + false;
  }
}

console.log(palindrome("Reyna"));
console.log(palindrome("Racecar"));
