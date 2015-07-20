// console.log("scope!");

// gloabl variable
var globalVar = "Michael!";

// var sum = function(x, y) {
//   // hiding
//   var result = x +y;
//   return result;
// };
//
// sum(4, 6);
//
// console.log(result);

// why is scope important

// var scoped = function(name) {
//   // hiding
//   // local variable
//   var greeting = "Hello " + name;
//   return greeting;
// };

// global variable
// var hello = scoped("Yusef");
// console.log(hello);

// var result1 = scoped("Yusef");
// console.log(result1);
// console.log(greeting);


// var keyword and scope

var greeting = "Hello!";

var scoped = function(name) {
  // hiding
  // local variable
  var greeting = "Hello " + name;
  return greeting;
};

// functions arguments - optional

function multiply(num1, num2) {
  if (num2 === undefined) {
    num2 = 2;
  }
  var result = num1 * num2;
  return result;
}

var result1 = multiply(4, 5);
console.log(result1);

var result2 = multiply(5);
console.log(result2);
