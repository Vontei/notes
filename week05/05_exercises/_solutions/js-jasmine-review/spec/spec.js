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

// Problem 2
// Write a function that takes a random number from 0 to 100 and returns all the odd numbers from 40 to that random number in an array. If the number is smaller than output the number.

describe('Problem 2', function() {
  it('should return all odd numbers from 40-100', function() {
    expect(code.OddNumbers(58)).toBe([41, 43, 45, 47, 49, 51, 53, 57]);
  });
  it('should return the number if less than 40', function() {
    expect(code.OddNumbers(33)).toBe(33);
  });
});
