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
