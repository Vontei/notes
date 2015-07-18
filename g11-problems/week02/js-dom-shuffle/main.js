function cardShuffle() {


var deck =  [
  { code: "&#x1F0A1", name: "Ace of Spades", suit: "Spades"},
  { code: "&#x1F0A2", name: "Two of Spades", suit: "Spades"},
  { code: "&#x1F0A3", name: "Three of Spades", suit: "Spades"},
  { code: "&#x1F0A4", name: "Four of Spades", suit: "Spades"},
  { code: "&#x1F0A5", name: "Five of Spades", suit: "Spades"},
  { code: "&#x1F0A6", name: "Six of Spades", suit: "Spades"},
  { code: "&#x1F0A7", name: "Seven of Spades", suit: "Spades"},
  { code: "&#x1F0A8", name: "Eight of Spades", suit: "Spades"},
  { code: "&#x1F0A9", name: "Nine of Spades", suit: "Spades"},
  { code: "&#x1F0AA", name: "Ten of Spades", suit: "Spades"},
  { code: "&#x1F0AB", name: "Jack of Spades", suit: "Spades"},
  { code: "&#x1F0AD", name: "Queen of Spades", suit: "Spades"},
  { code: "&#x1F0AE", name: "King of Spades", suit: "Spades"},
  { code: "&#x1F0B1", name: "Ace of Hearts", suit: "Hearts"},
  { code: "&#x1F0B2", name: "Two of Hearts", suit: "Hearts"},
  { code: "&#x1F0B3", name:"Three of Hearts", suit: "Hearts"},
  { code: "&#x1F0B4", name: "Four of Hearts", suit: "Hearts"},
  { code: "&#x1F0B5", name: "Five of Hearts", suit: "Hearts"},
  { code: "&#x1F0B6", name: "Six of Hearts", suit: "Hearts"},
  { code: "&#x1F0B7", name: "Seven of Hearts", suit: "Hearts"},
  { code: "&#x1F0B8", name: "Eight of Hearts", suit: "Hearts"},
  { code: "&#x1F0B9", name: "Nine of Hearts", suit: "Hearts"},
  { code: "&#x1F0BA", name: "Ten of Hearts", suit: "Hearts"},
  { code: "&#x1F0BB", name: "Jack of Hearts", suit: "Hearts"},
  { code: "&#x1F0BD", name: "Queen of Hearts", suit: "Hearts"},
  { code: "&#x1F0BE", name: "King of Hearts", suit: "Hearts"},
  { code: '&#x1F0C1', name: "Ace of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C2', name: "Two of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C3', name: "Three of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C4', name: "Four of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C5', name: "Five of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C6', name: "Six of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C7', name: "Seven of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C8', name: "Eight of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0C9', name: "Nine of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0CA', name: "Ten of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0CB', name: "Jack of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0CD', name: "Queen of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0CE', name: "King of Diamonds", suit: 'Diamonds'},
  { code: '&#x1F0D1', name:'Ace of Clubs', suit: 'Clubs'},
  { code: '&#x1F0D2', name:'Two of Clubs', suit:'Clubs'},
  { code: '&#x1F0D3', name:'Three of Clubs', suit:'Clubs'},
  { code: '&#x1F0D4', name:'Four of Clubs', suit:'Clubs'},
  { code: '&#x1F0D5', name:'Five of Clubs', suit:'Clubs'},
  { code: '&#x1F0D6', name:'Six of Clubs', suit:'Clubs'},
  { code: '&#x1F0D7', name:'Seven of Clubs', suit:'Clubs'},
  { code: '&#x1F0D8', name:'Eight of Clubs', suit:'Clubs'},
  { code: '&#x1F0D9', name:'Nine of Clubs', suit:'Clubs'},
  { code: '&#x1F0DA', name:'Ten of Clubs', suit:'Clubs'},
  { code: '&#x1F0DB', name:'Jack of Clubs', suit:'Clubs'},
  { code: '&#x1F0DD', name:'Queen of Clubs', suit:'Clubs'},
  { code: '&#x1F0DE', name:'King of Clubs', suit:'Clubs'}
];


  // currentIndex
  var currentIndex = deck.length;


  // continue looping until no more elements remain
  while (0 !== currentIndex) {

    // generate a random index
    randomIndex = Math.floor(Math.random() * currentIndex);

    // define the new currentIndex value
    currentIndex -= 1;

    // grab the current element
    var temporaryValue = deck[currentIndex];
    // Swap the current element with the random element
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  // call updateDom() function
  updateDom(deck[0].code, "card");
}


function updateDom(html, id) {
  // grab the div
  var element = document.getElementById(id);
  // update inner html within the div tags
  document.getElementById(id).innerHTML = html;
}
