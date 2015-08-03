var yourCode = {

  commafy: function(num) {
    var result = '';
      for (i = 1; i <= num; i++) {
        if ( i < num) {
          result += i + ',';
        } else  {
          result += i;
        }
      }
    return result;
  },

  joinToString: function(array) {
    var result = '';
    for (i = 0; i<=array.length - 1; i++) {
      if (i < array.length - 1) {
        result += array[i] + ' and ';
      }
      else {
        result += array[i] + ' oh my.';
      }
    }
    return result;
  },

  printBracketedNumbers: function(num) {
    var result = '';
    var i = 0;
    while (i <= num) {
      result += '[' + i + ']';
      i += 1;
    }
    return result;
  },

  sumOfN: function(num) {
    var result = 0;
    for (i = 0; i <= num; i++) {
      result += i;
    }
    return result;
  },

  // moviesFor: function(person) {
  // if (person === 'Robin Williams') {
  //     return "Jumanji, Hook, Good Will Hunting";
  //   }
  //   if (person === 'Sandra Bullock') {
  //     return "Gravity, The Lake House, The Blind Side";
  //   }
  //   if (person === 'Daniel Radcliffe') {
  //     return "All of the Harry Potters";
  //   }
  //   if (person === undefined) {
  //     return "Please provide an actor or actress";
  //   }
  // },

  // moviesFor: function(person) {
  //   if (person === 'Robin Williams') {
  //     return "Jumanji, Hook, Good Will Hunting";
  //   }
  //   if (person === 'Sandra Bullock') {
  //     return "Gravity, The Lake House, The Blind Side";
  //   }
  //   if (person === 'Daniel Radcliffe') {
  //     return "All of the Harry Potters";
  //   }
  //   if (person === undefined) {
  //     return "Please provide an actor or actress";
  //   }
  // },

  moviesFor: function(person) {
    switch(person) {
      case 'Robin Williams':
        return "Jumanji, Hook, Good Will Hunting";
      case 'Sandra Bullock':
        return "Gravity, The Lake House, The Blind Side";
      case 'Daniel Radcliffe':
        return "All of the Harry Potters";
      default:
        return "Please provide an actor or actress";
    }
  },

  joinWithForAndIndex: function(array) {
    var result = '';
    for (i = 0; i <= array.length-1; i++) {
      result += array[i] + i;
    }
    return result;
  },

  joinWithForAndToken: function(array) {
    var result = '';
    for (i = 0; i<=array.length - 1; i++) {
      if (i < array.length - 1) {
        result += array[i] + '*';
      } else {
        result += array[i];
      }
    }
    return result;
  }

};

module.exports = yourCode;
