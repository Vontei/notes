/*
JavaScript Statements
alert("Hey! I'm a popup!");
console.log('This writes to the js console');
document.write("<p>This command allows you to write directly to the web page</p>");

Use `var`, `prompt`, `string` literals, the `+` operator, and `alert` such
that when the user opens the page, it will ask them for their name, and then
respond with "Hello [NAME_GOES_HERE]!"
*/

var input = prompt("What's your name?");
alert("Hello " + input + "!");
