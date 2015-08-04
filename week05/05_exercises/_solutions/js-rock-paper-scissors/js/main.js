var Player = function(name) {
  this.name = name;
};

var Game = function(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Game.prototype.PAIRS = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper'
};

Game.prototype.winner = function() {
  if (this.player1.pick === this.player2.pick) {
    return null;
  }
  if (this.PAIRS[this.player1.pick] === this.player2.pick) {
    return this.player1;
  } else {
    return this.player2;
  }
};
