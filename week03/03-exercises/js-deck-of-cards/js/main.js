
// create deck

var options = {
  containerId: 'table',
  drawTimeInterval: 50
};
var deck = new Deck(options);


// event handlers

document.getElementById('draw-button').onclick = function () {
  deck.draw(1);
};
document.getElementById('draw-all-button').onclick = function () {
  deck.drawAll();
};
document.getElementById('reset-deck').onclick = function () {
  deck.destroy();
  deck = new Deck(options);
};
