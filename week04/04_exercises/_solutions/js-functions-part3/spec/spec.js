var code = require('../js/main.js');

describe('js-functions-part3', function() {

  it('returns a name', function() {
    expect(code.getStudentName({name: 'Michael', age: 27 })).toEqual('Michael');
  });

  it('counts letters in an array of strings', function(){
    expect(code.getTotalLetters(['the','car','is','fast'])).toEqual(12);
  });

  it('takes two args and create an object', function(){
    expect(code.createObject('city', 'Boulder')).toEqual(12);
  });

  it('returns the value at a negative index', function(){
    expect(code.getNegativeIndex(['a', 'b', 'c', 'd', 'e'], -3)).toEqual('c');
  });

  it('removes the given character from a string', function(){
    expect(code.removeCharacter('javascript', 'a')).toEqual('jvscript');
    expect(code.removeCharacter('javascript', '1')).toEqual('javascript');
    expect(code.removeCharacter('12345', '2')).toEqual('1345');
  });

  it('returns all key value pairs of an obj as a string joined by a supplied argument',function(){
    expect(code.outputObject({john: 10, jerry: 11, jenny: 12 })).toEqual('john is 10, jerry is 11, jenny is 12');
  });

  it('returns the vowels in a string', function(){
    expect(code.removeDuplicates(code.getVowels('javascripting'))).toEqual(['a','i']);
    expect(code.removeDuplicates(code.getVowels('More code'))).toEqual(['o','e']);
  });

  it( 'returns true if there are two of each item in the array, false otherwise', function(){
    expect(code.captureTwins(['m', 'm', 'n', 'n', 's', 's'])).toEqual(true);
    expect(code.captureTwins(['m', 'm', 'm', 'n', 's', 's'])).toEqual(false);
  });

  it( 'takes string of booleans and returns true if any are true', function(){
    expect(code.testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(code.testBooleanLogic([false, false, false])).toEqual(false);
  });

  it('returns an array of the unique values in an array', function(){
    expect(code.getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(['m', 'n', 'r', 's']);
    expect(code.getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(['michael', 'ben', 'kerry']);
  });

});
