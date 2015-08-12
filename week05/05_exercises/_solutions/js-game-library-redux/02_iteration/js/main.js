// Game constructor
var Game = function(title, genre, image){
  this.title = title;
  this.genre = genre;
};

// Game render method
Game.prototype.render = function() {

  // Create a dom element for a single game
  var gameList = $('<ul>')
    .append('<li><strong>' + this.title + '</strong></li>')
    .append('<li>' + this.genre + '</li>');

  // Create container for the unordered list
  this.$element = $('<div>')
    .addClass('game')
    .append(gameList);

  // Return element
  return this.$element;
};

// GameLibrary Constructor
var GameLibrary = function(title) {
  this.title = title;
  this.games = [];
};

// GameLibrary render method
GameLibrary.prototype.render = function () {

  // Create dom elements for all games
  var renderedGames = this.games.map(function(item){
    return item.render();
  });

  // Render an add game form
  var addGameForm = $('<form>')
    .append('<div class="form-group"><input type="text" class="game-title" placeholder="Game Title"></div>')
    .append('<div class="form-group"><input type="text" class="game-genre" placeholder="Genre"></div>')
    .append('<div class="form-group"><button type="submit" class="btn btn-default">Submit</button></div></form>');

  // Render the base game library element
  this.$element = $('<div>')
    .addClass('game-library')
    .append('<h3>' + this.title + '</h3>')
    .append($('<div class="games">').append(renderedGames))
    .append(addGameForm);


  // Handle submission of new game - add the game to the library and re-render the game list
  var originalLibrary = this;
  addGameForm.on('submit', function(event){

    event.preventDefault();

    // Grab form values
    var title = $(this).find('.game-title').val();
    var genre = $(this).find('.game-genre').val();

    // Generate a new game instance
    var newGame = new Game(title, genre);

    // Push the new game into the library
    originalLibrary.games.push(newGame);

    // Clear the current game dom list and append the new set of games
    originalLibrary.$element.find('.games')
      .empty()
      .append(originalLibrary.games.map(function(item){
        return item.render();
      }));
  });

  // Return a reference to the core library dom element
  return this.$element;
};

// Create some game instances
var halo = new Game('Halo', 'First-person Shooter');
var chronoTrigger = new Game('Chrono Trigger', 'Role Playing Game');
var myLibrary = new GameLibrary('Mike\'s Games');
myLibrary.games.push(halo);
myLibrary.games.push(chronoTrigger);
console.log(myLibrary);
