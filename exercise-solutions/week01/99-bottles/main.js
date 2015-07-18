/* long solution
startNum = 99;
numNow = startNum;

while (numNow > 2) {
  console.log(numNow + " bottles of beer on the wall, " + numNow + " bottles of beer!");
  numNow -= 1;
  console.log("Take one down, pass it around, " + numNow + " bottles of beer on the wall!");
}
if (numNow == 2) {
  console.log(numNow + " bottles of beer on the wall, " + numNow + " bottles of beer!");
  numNow -= 1;
  console.log("Take one down, pass it around, " + numNow + " bottle of beer on the wall!");
}
if (numNow == 1) {
  console.log(numNow + " bottle of beer on the wall, " + numNow + " bottle of beer!");
  numNow -= 1;
  console.log("Take one down, pass it around, " + numNow + " bottles of beer on the wall!");
}
*/

for (var numBottles = 99; numBottles > 2; numBottles--) {
  console.log(numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer!");
  console.log("Take one down, pass it around, " + (numBottles - 1) + " bottles of beer on the wall!");
}
if (numBottles == 2) {
  console.log(numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer!");
  console.log("Take one down, pass it around, " + (numBottles - 1) + " bottle of beer on the wall!");
  console.log(numBottles + " bottle of beer on the wall, " + numBottles + " bottle of beer!");
  console.log("Take one down, pass it around, no more bottle of beer on the wall!");
}

// while loop

var totalBottles = 99;
while (totalBottles > 0) {
  console.log(totalBottles + " bottles of beer on the wall, " + totalBottles + " bottles of beer!");
  console.log("Take one down, pass it around, " + (totalBottles - 1) + " bottles of beer on the wall!");
  totalBottles--;
}
