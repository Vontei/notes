var yourCode = require('../src');
var reporter = require('jasmine-galvanize-poster');
// jasmine.getEnv().addReporter(reporter);

describe("separating numbers with commas", function() {
  it("returns a string with n numbers separated by commas", function() {
    expect(yourCode.commafy(3)).toEqual("1,2,3");
    expect(yourCode.commafy(5)).toEqual("1,2,3,4,5");
  });
});

describe("using a for loop to translate an array", function() {
  it("translates an array into a string of words separated by 'and' and terminated with 'oh my", function() {
    // please use a for loop in your solution
    expect(yourCode.joinToString(['lions', 'tigers', 'bears'])).toEqual("lions and tigers and bears oh my.");
  });
});

describe("using a while loop", function() {
  it("prints numbers surrounded by brackets based on the argument passed to the function", function() {
    // please use a while loop in your solution
    expect(yourCode.printBracketedNumbers(3)).toEqual("[0][1][2][3]");
    expect(yourCode.printBracketedNumbers(5)).toEqual("[0][1][2][3][4][5]");
  });
});

describe("using the right tool for the job", function() {
  it("computes the sum of first n positive integers", function() {
    // 1 + 2 + 3 + 4 + 5
    expect(yourCode.sumOfN(5)).toEqual(15);
    // 1 + 2 + 3 ... + 18 + 19
    expect(yourCode.sumOfN(19)).toEqual(190);
  });
});

describe("using conditionals", function() {
  it("returns a list of movies for a given person", function() {
    expect(yourCode.moviesFor("Robin Williams")).toEqual("Jumanji, Hook, Good Will Hunting");
    expect(yourCode.moviesFor("Sandra Bullock")).toEqual("Gravity, The Lake House, The Blind Side");
    expect(yourCode.moviesFor("Daniel Radcliffe")).toEqual("All of the Harry Potters");
    expect(yourCode.moviesFor()).toEqual("Please provide an actor or actress");
  });
});

describe('joinWithForAndIndex', function() {
  it('returns a string with the elements of the array joined by their index', function() {
    expect(yourCode.joinWithForAndIndex(['a', 'b', 'c', 'd'])).toEqual("a0b1c2d3");
  });
});

describe('joinWithForAndToken', function() {
  it('returns a String with the elements of the array joined, separated by the provided token', function() {
    expect(yourCode.joinWithForAndToken(['a', 'b', 'c'], '*')).toEqual('a*b*c');
  });
});
