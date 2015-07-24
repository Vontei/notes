// target select box
var selectBox = document.getElementsByTagName("select")[0];

// event handler
selectBox.addEventListener("click", function() {
  // grab selected items using the `selectedOptions()` property
  var getSelectedOptions = selectBox.selectedOptions;
  // iterate through the selected options and log each to the js console
  for (var i = 0; i < getSelectedOptions.length; i++) {
    console.log(getSelectedOptions[i]);
  }
});
