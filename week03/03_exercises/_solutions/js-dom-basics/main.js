// *** DOM Traversal, Targetting, and Manipulation *** //

// target a paragraph
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

// target an unordered list
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

// what's the difference between 'getAllElements' and 'getSingleElement'?
var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

// target the list items for the unordered list
var allListItems = getSingleElement.getElementsByTagName('li');
console.log(allListItems);

// loop through each list item, logging the element to the JS console
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

// loop through each list item, logging the innerText to the JS console
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

// loop through each list item, changing the inner text
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}

// what does this now do, compared to line 15?
console.log(allListItems);

// create a list element
var li = document.createElement('li');
console.log(li);

// add some text to the element
var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

// add the new li to the unordered list
getSingleElement.appendChild(li);

// what's happening here, compared to line 15 and line 33?
console.log(allListItems);

// create another list element, add text, and then add it to the dom
var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);

// what does 'insertBefore' do?
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);

// what's happening here, compared to line 15, 33, and 47?
console.log(allListItems);

// change the background color
document.getElementById('main').style.backgroundColor = "red";


// *** Event Handling *** //

// target a button
var button = document.getElementById('main-button');

// add an event handler to listen for the button to be clicked
function buttonClick() {
  console.log('You just clicked the button!');
}

// event registration part
button.onclick = buttonClick;

// all in one - target, event handler
document.getElementById("main-button").addEventListener("click", function(event){
  console.log('You just clicked the button!');
});
