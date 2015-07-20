// define functions

function consoleFunction() {
  console.log("testing!");
}

function returnFunction() {
  return "testing!";
}

// call functions

var results1 = consoleFunction();

var results2 = returnFunction();
console.log(results2);

// test results

if(typeof consoleFunction() === 'undefined') {
  console.log("consoleFunction returns undefined");
} else {
  console.log("consoleFunction returns a value");
}

if(typeof returnFunction() === 'undefined') {
  console.log("returnFunction returns undefined");
} else {
  console.log("returnFunction returns a value");
}
