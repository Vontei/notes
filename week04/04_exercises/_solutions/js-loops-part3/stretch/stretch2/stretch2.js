/// WIP

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

console.log('problem 1 - underscore');
_.each(students, function(obj){
  console.log(obj.age);
});

// console.log('\nproblem 1 - lodash');
// students.forEach(function(item) {
//   console.log(item.age);
// });

console.log('\nproblem 2 - underscore');
_.each(students, function(obj){
  console.log(obj.name +', '+ obj.city);
});

// console.log('\nproblem 2 - lodash');
// students.forEach(function(item) {
//   console.log(item.name +', '+ item.city);
// });

console.log('\nproblem 3 - underscore');
var test = _.chain(students)
  .filter(function(obj){return obj.city === 'Boulder';})
  .value();
console.log(JSON.stringify(test));

console.log('\nproblem 3 - forEach loop');
students.forEach(function(item) {
  if (item.city === 'Boulder') {
    console.log(item.name +' is from '+ item.city);
  }
});

// console.log('\nproblem 4 - vanilla js');
// for(var i = 0; i < students.length; i++) {
//   if (students[i].age > 25) {
//       console.log(students[i].name +' is older than 25');
//   }
// }

// console.log('\nproblem 4 - forEach loop');
// students.forEach(function(item) {
//   if (item.age > 25) {
//     console.log(item.name +' is older than 25');
//   }
// });
