var showCards = document.getElementById("cards");

showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  // for each suit
  for(var i=0; i < suits.length; i++) {
    //for each rank
    for(var j=0; j< ranks.length; j++) {
      deck.push({suit: suits[i], card: ranks[j].card});
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck){
  for (var i = cardDeck.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var temp = cardDeck[i];
    cardDeck[i] = cardDeck[randomIndex];
    cardDeck[randomIndex] = temp;
   }
   return cardDeck;
}
