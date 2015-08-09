exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function (num) {
  if (num <= 10) {
    return num * 0.1;
  } else if (num <= 20) {
    return (num - 10) * 0.07 + 1;
  } else if (num <= 30) {
    return (num - 20) * 0.05 + 1 + 0.7;
  } else {
    return (num - 30) * 0.03 + 1 + 0.7 + 0.5;
  }
};

exports.leapYear = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

exports.changeToUpper = function (array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
};

exports.findGreatestStrength = function (list) {
  var greatest = 0;
  var strongest = {};
  for (var i = 0; i < list.length; i++) {
    if (list[i].strength > greatest) {
      greatest = list[i].strength;
      strongest = list[i];
    }
  }
  return strongest;
};
