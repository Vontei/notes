var code = require('../js/main.js');

// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

//Problem 2
// Write a function that takes a random number from 0 to 100 as an argument and returns all the odd numbers from 40 to that random number in an array, if the number is smaller than output the number.
describe('Problem 2', function() {
  it('should return all odd numbers from 40 to that random number', function() {
    expect(code.oddNumbers(20)).toBe(20);
    expect(code.oddNumbers(50)).toEqual([41,43,45,47,49]);
    expect(code.oddNumbers(-1)).toEqual(-1);
  });
});

//Problem 3
// Write a function that takes a random number from 0 to 100 as an argument and returns all the even numbers from 0 to the randomized number in an array.
describe('Problem 3', function() {
  it('should return all even numbers until random number', function() {
    expect(code.evenNumbers(10)).toEqual([0,2,4,6,8]);
    expect(code.evenNumbers(5)).toEqual([0,2,4]);
    expect(code.evenNumbers(101)).toEqual("Not a number 0 - 100");
    expect(code.evenNumbers(-1)).toEqual("Not a number 0 - 100");
  });
});

//Problem 4
// Write a function that takes a random number from 0 to 100 as an argument and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].
describe('Problem 4', function() {
  it('should return all odd numbers from 40 to random number, or, if number is less than 40, all numbers smaller than 40 until random number', function() {
    expect(code.fortyUpOrDown(50)).toEqual([41,43,45,47,49]);
    expect(code.fortyUpOrDown(37)).toEqual([40, 39, 38, 37]);
    expect(code.fortyUpOrDown(101)).toEqual("Not a number 0 - 100");
    expect(code.fortyUpOrDown(-1)).toEqual("Not a number 0 - 100");
  });
});

//Problem 5
//Write a function that takes a random number from 0 to 10,000 as an argument and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.
describe('Problem 5', function() {
  it('should return the sum of digits of random number', function() {
    expect(code.sumDigits(1049)).toEqual(14);
    expect(code.sumDigits(10)).toEqual(1);
    expect(code.sumDigits(10100)).toEqual("Not a number 0 - 10,000");
    expect(code.sumDigits(-1)).toEqual("Not a number 0 - 10,000");
  });
});
