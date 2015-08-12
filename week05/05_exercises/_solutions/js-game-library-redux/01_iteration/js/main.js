// Game constructor
var Game = function(title, genre, image){
  this.title = title;
  this.genre = genre;
};

// GameLibrary Constructor
var GameLibrary = function(title) {
  this.title = title;
  this.games = [];
};

// Create some game instances
var halo = new Game('Halo', 'First-person Shooter');
var chronoTrigger = new Game('Chrono Trigger', 'Role Playing Game');
var myLibrary = new GameLibrary('Mike\'s Games');
myLibrary.games.push(halo);
myLibrary.games.push(chronoTrigger);
console.log(myLibrary);
