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

console.log('problem 1 - lodash');
_.forEach(students, function(item) {
  console.log(item.age);
});

console.log('\nproblem 2 - lodash');
_.forEach(students, function(item) {
  console.log(item.name +', '+ item.city);
});

// console.log('\nproblem 3 - lodash');
// students.forEach(function(item) {
//   if (item.city === 'Boulder') {
//     console.log(item.name +' is from '+ item.city);
//   }
// });

// console.log('\nproblem 3 - lodash');
// students.forEach(function(item) {
//   if (item.city === 'Boulder') {
//     console.log(item.name +' is from '+ item.city);
//   }
// });

// console.log('\nproblem 4 - lodash');
// students.forEach(function(item) {
//   if (item.age > 25) {
//     console.log(item.name +' is older than 25');
//   }
// });
