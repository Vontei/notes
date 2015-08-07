/*
  Challenge:
  Update your Quote class to include a changeText
  method that, given new text as a parameter,
  will update both the text of the instance
  as well as change the rendered dom elements value.
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
  this.$element = $('<div class="quote">')
    .text(this.text + ' FROM ' + this.author);
  return this.$element;
};
Quote.prototype.changeColor = function(color) {
  this.$element.css('color', color);
};
Quote.prototype.changeText = function(newText) {
  this.text = newText;
  this.$element.text(this.text + ' FROM ' + this.author);
  // this.$element.find('.quote').text(this.text + ' FROM ' + this.author);
};

// Instances
var michael = new Quote('Don\'t be late', 'Michael Herman');

console.log(michael);

$(document).on('ready', function(){
  $("body")
    .append(michael.render());
  michael.changeText('You are late!');
  console.log(michael);
});

