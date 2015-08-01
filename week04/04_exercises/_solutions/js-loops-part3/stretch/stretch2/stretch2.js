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

console.log('\nproblem 2 - underscore');
_.each(students, function(obj){
  console.log(obj.name +', '+ obj.city);
});

// how can you make this more concise?
console.log('\nproblem 3 - underscore');
var test = _.chain(students)
  .filter(function(obj){return obj.city === 'Boulder';})
  .map(function(obj){return obj.name + ' is from ' + obj.city;})
  .each(function(obj){console.log(obj);})
  .value();

// how can you make this more concise?
console.log('\nproblem 4 - underscore');
var test = _.chain(students)
  .filter(function(obj){return obj.age  > 25;})
  .map(function(obj){return obj.name + ' is older than 25';})
  .each(function(obj){console.log(obj);})
  .value();
