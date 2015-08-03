$(document).ready(function() {

  // globals
  var arthimeticArray = [];
  var operator = null;

  // appends values to the calculator screen
  $('.buttons span').not('#calc').on('click', function () {
    var keyPress = $(this).html();
    $('#screen').append(keyPress);
  });

  // grabs first number and the operator and add its to the arithmeticArray
  $('.operator').not('#cancel').not('#calc').on('click', function () {
    var keyPress = $(this).html();
    var calcScreenArray = $('#screen').html().split('');
    operator = calcScreenArray.pop();
    arthimeticArray.push(calcScreenArray.join(''));
    arthimeticArray.push(operator);
  });

  // grabs second number and the operator and add its to the arithmeticArray,
  // then calls calculateValue() function and appends answer to the DOM
  $('#calc').on('click', function() {
    var calcScreen = $('#screen').html();
    var number2 = calcScreen.split(operator)[1];
    arthimeticArray.push(number2);
    $('#screen').html(caculateValue(arthimeticArray));
  });

  // cancel or clear button to empty the screen
  $('#cancel').on('click', function () {
    $('#screen').empty();
  });

});
