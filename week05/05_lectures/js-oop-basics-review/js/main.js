/*
  CHALLENGE:

  Create a Media class that has -
    - a name property
    - a view method that logs "Viewing <media name>" to the console
  Create a Picture class that extends from Media and adds -
    - a property for image url
    - a create method that renders the image to the DOM via jQuery.
*/

// Media constructor
var Media = function(name) {
  this.name = name;
};

Media.prototype.view = function(){
  console.log('Viewing ' + this.name);
};

// Testing Media
var myMedia = new Media('some media name');
myMedia.view();

// Picture Constructor
var Picture = function(name, imageURL) {
  Media.call(this, name);
  this.imageURL = imageURL;
};

Picture.prototype = new Media();

Picture.prototype.render = function() {
  this.$element = $('<img>')
    .attr('src', this.imageURL);
  return this.$element;
};

// Testing Picture
var myPicture = new Picture('kitten', 'http://www.tehcute.com/pics/201109/bow-tie-kitten.jpg');
var myCat = new Picture('cat', 'https://www.petfinder.com/wp-content/uploads/2012/11/99950237-why-cats-meow-632x475.jpg');
// console.log(myPicture);

$(document).on('ready', function() {
  $('div').append(myPicture.render());
  $('div').append(myCat.render());
});


















