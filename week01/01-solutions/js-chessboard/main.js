// attempt # 1

for (var row = 0; row < 8; row++) {

  var line = "";

  for (var column = 0; column < 8; column++) {

    var total = row + column;

    // console.log("row: ", row);
    // console.log("column: ", column);
    // console.log("total: ", total);

    if (total % 2 === 0) {
      line += " ";
    } else {
      line += "#";
    }

  }

  console.log(line);

}

// attempt # 2

// var odd = " # # # #\n";
// var even = "# # # # \n";
// var result = "";
//
// for (var i = 0; i < 8; i++) {
//   if (i % 2 === 0) {
//       result += odd;
//   } else {
//     result += even;
//   }
// }
//
// console.log(result);
