// functions

// function expression syntax
var greet = function() {
  console.log("hello class");
};

greet();

// function declaration syntax
function greetDeclartionSyntax() {
  console.log("hello class 2");
}

greetDeclartionSyntax();

// defining with a parameter
var greetWithParameters = function(str) {
  console.log("hello " + str);
};

greetWithParameters("class");

// why use functions?

function  classGreeting(studentName) {
  console.log("Hi, "+ studentName);
}

classGreeting('Lance');

function  classGreetingTwo(student1, student2) {
  console.log("Hi, "+ student1);
  console.log("Hello, "+ student2);
}

classGreetingTwo('Kierston', 'Robbie');

// returning values

function  classGreetingReturn(studentName) {
  return "Hi, " + studentName;
}

var result = classGreetingReturn('Brandon');
console.log(result);
console.log(classGreetingReturn('Brandon'));
