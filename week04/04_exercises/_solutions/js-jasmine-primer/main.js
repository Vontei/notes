exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function (num) {
  if (num <= 10) {
    return num * .1;
  } else if (num <= 20) {
    return (num - 10) * .07 + 1;
  } else if (num <= 30) {
    return (num - 20) * .05 + 1 + .7;
  } else {
    return (num - 30) * .03 + 1 + .7 + .5;
  }
}

exports.leapYear = function (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

exports.changeToUpper = function (array) {
  for (i in array) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}

exports.findGreatestStrength = function (list) {
  var greatest = 0;
  var strongest = {};
  for (i in list) {
    if (list[i].strength > greatest) {
      greatest = list[i].strength;
      strongest = list[i];
    }
  }
  return strongest;
}
