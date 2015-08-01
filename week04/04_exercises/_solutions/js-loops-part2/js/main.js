// *** GLOBALS *** //

var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];



// LOOPS

console.log("\njoe carl rachel derek");
for(var i = 0; i < students.length-1; i++) {
  console.log(students[i]);
}


console.log("\njoe rachel lily");
for(var i = 0; i < students.length; i+=2) {
  console.log(students[i]);
}

console.log("\nlily derek rachel carl joe");
var copiedArray = students.slice();
var studentsReversed = copiedArray.reverse();
for(var i = 0; i < students.length-1; i++) {
    console.log(studentsReversed[i]);
}

console.log("\njoe carl carl rachel rachel derek derek lily");
for(var i = 0; i < students.length; i++) {
    if(i === 0 || i === students.length-1) {
        console.log(students[i]);
    } else {
        for(var j = 0; j < 2; j++) {
            console.log( students[i] );
        }
    }
}

