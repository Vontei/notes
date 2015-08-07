/*
  Challenge:
  Create a Quote class that has two properties:
    - text
    - author
  The constructor should take the values in as
  parameters.
  Create an instance of the Quote class and store
  it in a variable. Then console.log the text and
  author values separately.
  BONUS: Define default parameters if none are passed.
*/

// Constructor
var Quote = function(text, author) {

  // shorter method
  this.text = text || 'no text';
  this.author = author || 'anonymous';

  // // longer method
  // if(text === undefined){
  //   text = 'no text';
  // }
  // if(author === undefined){
  //   author = 'anonymous';
  // }
  // this.text = text;
  // this.author = author;

};

// Instances
var lincoln = new Quote('Fore score...', 'Abe Lincoln');
console.log(lincoln);
var emptyQuote = new Quote();
console.log(emptyQuote);










