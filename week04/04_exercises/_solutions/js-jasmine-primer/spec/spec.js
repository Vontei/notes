var code = require('../main.js');

describe("Hello World", function() {

  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });

});

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(0.1);
    expect(code.calculate(10)).toEqual(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calculate(25)).toEqual(1.95);
  });

  it('should tax 5% on the third $10', function(){
    expect(code.calculate(40)).toEqual(2.50);
  });

});

describe('Leap Year', function(){

  it('should return true if leap year', function(){
    expect(code.leapYear(2012)).not.toBe(false);
    expect(code.leapYear(2015)).toBe(false);
    expect(code.leapYear(1700)).toBe(false);
  });

});

describe('Change to Upper', function() {

  it('should return an array of uppercase strings', function(){
    expect(code.changeToUpper(['red', 'green', 'blue'])).toEqual(['RED', 'GREEN', 'BLUE']);
  });

});

describe('Find Greatest Strength', function() {

  it('should return the object with the greatest strength attribute', function(){
    expect(code.findGreatestStrength([{strength: 20, name: 'A'}, {strength: 10, name: 'B'}])).toEqual({strength: 20, name: 'A'});
  });

});
