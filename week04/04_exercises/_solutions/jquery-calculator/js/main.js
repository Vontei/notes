$('span').on('click', function(event){ addToScreen(); });
$('#calc').on('click', function(event){ displayAnswer(); });
$('#cancel').on('click', function(event){$('#screen').html("");});

function addToScreen(){
  $('#screen').append($(event.target).html() + " " );
}

function displayAnswer(){
  var input = $('#screen').html();
  var inputArray = input.split(" ");
  var x = parseInt(inputArray[0]);
  var y = parseInt(inputArray[2]);
  var operator = (inputArray[1]);
  var answer = calculate(x,y,operator);
  $('#screen').html(answer);
}

function calculate(x,y,operator){
  var answer = 0;
  switch (operator) {
    case '+':
      answer = x + y;
      break;
    case '-':
      answer = x - y;
      break;
    case 'x':
      answer = x * y;
      break;
    default:
      answer = x / y;
      break;
  }
  return answer;
}
