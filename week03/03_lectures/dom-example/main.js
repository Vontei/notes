// target select box
var selectBox = document.getElementsByTagName("select")[0];

// event handler
selectBox.addEventListener("click", function() {
  // grab selected items
  var getSelectedOptions = selectBox.selectedOptions;
  // iterate through each option and log it to the console
  for (var i = 0; i < getSelectedOptions.length; i++) {
    console.log(getSelectedOptions[i]);
  }
});
