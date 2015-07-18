var type = prompt("Convert from fahrenheit or celsius:");
var fTemp;
var cTemp;

if (type == "fahrenheit") {
  fTemp = prompt("Fahrenheit temperature:");
  cTemp = (fTemp - 32)*(5/9);
  alert(fTemp + "°F = " + cTemp + "°C");
} else if (type == "celsius") {
  cTemp = prompt("Celsius temperature:");
  fTemp = (cTemp*(9/5)+32);
  alert(cTemp + "°C = " + fTemp + "°F");
} else {
  alert("That is not a valid temperature type");
}
