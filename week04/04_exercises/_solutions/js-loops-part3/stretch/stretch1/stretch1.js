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

console.log('problem 1 - vanilla js');
for(var i = 0; i < students.length; i++) {
  console.log(students[i].age);
}

console.log('\nproblem 1 - forEach');
students.forEach(function(item) {
  console.log(item.age);
});

console.log('\nproblem 2 - vanilla js');
for(var i = 0; i < students.length; i++) {
  console.log(students[i].name +', '+ students[i].city);
}

console.log('\nproblem 2 - forEach');
students.forEach(function(item) {
  console.log(item.name +', '+ item.city);
});

console.log('\nproblem 3 - vanilla js');
for(var i = 0; i < students.length; i++) {
  if (students[i].city === 'Boulder') {
    console.log(students[i].name +' is from '+ students[i].city);
  }
}

console.log('\nproblem 3 - forEach loop');
students.forEach(function(item) {
  if (item.city === 'Boulder') {
    console.log(item.name +' is from '+ item.city);
  }
});

console.log('\nproblem 3 - filter');
function isCorrectCity(value) {
  if (value.city === 'Boulder') {
    console.log(value.name +' is from '+ value.city);
  }
}
var filteredCity = students.filter(isCorrectCity);

console.log('\nproblem 4 - vanilla js');
for(var i = 0; i < students.length; i++) {
  if (students[i].age > 25) {
      console.log(students[i].name +' is older than 25');
  }
}

console.log('\nproblem 4 - forEach loop');
students.forEach(function(item) {
  if (item.age > 25) {
    console.log(item.name +' is older than 25');
  }
});

console.log('\nproblem 4 - filter');
function isCorrectAge(value) {
  if (value.age > 25) {
    console.log(value.name +' is older than 25');
  }
}
var filteredAge = students.filter(isCorrectAge);
