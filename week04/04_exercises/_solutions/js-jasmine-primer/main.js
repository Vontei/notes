exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function (num) {
  if (num <= 10) {
    return num * .1;
  } else {
    return (num - 10) * .07 + 1;
  }
}
