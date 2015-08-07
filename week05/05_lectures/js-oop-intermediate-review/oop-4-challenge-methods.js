/*
  Challenge:
  Update your Quote class to include two methods:
    - countWords: Return the number of words in the quote text
    - render: Returns a new DOM element via jQuery to represent the quote
  Log the result of the countWords method on an instance.
  Use jQuery and the create method to append your quote to the page.
*/

// Constructor
var Quote = function(text, author) {
  this.text = text || 'no text';
  this.author = author || 'anonymous';
};

// Methods
Quote.prototype.countWords = function() {
  return this.text.split(" ").length;
};
Quote.prototype.render = function() {
  this.$element = $('<div>')
    .append('<strong>Quote</strong>: ' + this.text)
    .append('<br>')
    .append('Author: ' + this.author);
  return this.$element;
};
Quote.prototype.changeColor = function(color) {
  this.$element.css('color', color);
};

// Instances
var lincoln = new Quote('Fore score...', 'Abe Lincoln');
var emptyQuote = new Quote();
console.log(lincoln.countWords());

$(document).on('ready', function(){
  $("body")
    .append(lincoln.render())
    .append(emptyQuote.render());
  lincoln.changeColor('blue');
});




