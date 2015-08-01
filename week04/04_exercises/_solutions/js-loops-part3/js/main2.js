// *** GLOBALS *** //

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];



// *** LOOPS *** //

console.log("\nDerek Liz Carl Peter Megan");
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i].name);
// }
arr.forEach(function(item) {
    console.log(item.name);
});



console.log("\n25 28 31 23 19");
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i].age);
// }
arr.forEach(function(item) {
    console.log(item.age);
});



console.log("\nDerek, Boulder Liz, Denver Carl, Boulder Peter, Boulder Megan, Denver");
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i].name +', '+ arr[i].city);
// }
arr.forEach(function(item) {
    console.log(item.name +', '+ item.city);
});



console.log("\nDerek is from Boulder Carl is from Boulder Peter is from Boulder");
// for(var i=0; i<arr.length; i++) {
//     if (arr[i].city === 'Boulder') {
//         console.log(arr[i].name +' is from '+ arr[i].city);
//     }
// }
arr.forEach(function(item) {
    if (item.city === 'Boulder') {
        console.log(item.name +' is from '+ item.city);
    }
});



console.log("\nLiz is older than 25 Carl is older than 25");
// for(var i=0; i<arr.length; i++) {
//     if (arr[i].age > 25) {
//         console.log(arr[i].name +' is older than 25');
//     }
// }
arr.forEach(function(item) {
    if (item.age > 25) {
        console.log(item.name +' is older than 25');
    }
});
