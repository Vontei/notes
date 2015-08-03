$( document ).ready(function() {

function calc (resultsArray) {
  //variables
  firstNum = parseInt(resultsArray[0]);
  operatorInput = resultsArray[1];
  secondNum = parseInt(resultsArray[2]);
  //if statement to check operator, followed by calculation
    if (operatorInput === "+") {
      return (firstNum + secondNum);
    } else if (operatorInput === "-") {
      return (firstNum - secondNum);
    } else if (operatorInput === "*") {
      return (firstNum * secondNum);
    } else if (operatorInput === "/") {
      return (firstNum/secondNum);
    } else return ('wrong');
}


//calculate button
$('#calc').on('click', function () {
    var operatorArray= ["+", "-", "*", "/"];
    var calcScreen = $('#screen').html();
    var resultsArray = calcScreen.split(" ");
    $('#screen').html(calc(resultsArray));
});

//get number button values
$('.buttons span').not('.operator').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(keyPress);
});

//get operator buttons
$('.operator').not('#cancel').not('#calc').on('click', function () {
  var keyPress = $(this).html();
  $('#screen').append(" " + keyPress + " ");
});

//cancel or clear button to empty the screen
$('#cancel').on('click', function () {
  $('#screen').empty();
});

});
