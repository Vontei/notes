// add scripts

var calcBtn = document.getElementById('calculate-total');
var result = document.getElementById('result');
var optionList = document.getElementById('tip-percentage');
var tipAmount = optionList.selectedOptions[0].value;

calcBtn.addEventListener('click', function(event) {
  event.preventDefault();
  result.innerHTML = "";
  var tipAmount = optionList.selectedOptions[0].value;
  var calcAmount = document.getElementById('dollar-amount').value;
  console.log(calcBtn)
  result.innerHTML = "You should tip $" + Number(calcAmount * tipAmount).toFixed(2);
});
