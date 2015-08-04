
var arr = [10, 20, 30];

//--------------//
// *** map *** //
//------------//

// use map when you want to iterate through an array,
// manipulate each element and return them to a new array
// part of ECMAScript 6

// non-functional approach
var newArray = [];
for (var i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 2);
}

console.log('Old Array', arr);
console.log('New Array', newArray);

// functional approach
var newArray2 = arr.map(function(num){
  return num * 2;
});

console.log('New Array (with map)', newArray2);


//-----------------//
// *** filter *** //
//---------------//

// use filter when you want to iterate through an array,
// test for a certain condition and return values that evaluate to true
// to a new array
// part of ECMAScript 6

// non-functional approach
var newArray3 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= 20) {
    newArray3.push(arr[i]);
  }
}

console.log('Old Array', arr);
console.log('New Array', newArray3);

// functional approach
var newArray4 = arr.filter(function(num){
  return num >= 20;
});

console.log('New Array (with filter)', newArray4);


