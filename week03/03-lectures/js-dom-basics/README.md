# JavaScript and the DOM - a primer

Let's look at the basics of using *vanilla* JavaScript to manipulate the DOM...

## Set the stage

- Clear the stage (close all other terminal tabs, chrome tabs, email etc...)
- Figure out the "what" and "why" by...
   - reading through the objectives
   - reading through the activities below
- REMEMBER! It's about the process. There's no rush. Take risks, have fun! Don't be afraid to make mistakes and try things.

### Objectives:

By the end of this lesson you should be able to:

- ADD EVAN'S OBJECTIVES

### Key terms:

- ADD KEY TERMS

### Rationale:

- ADD RATIONALE

## Setup

1. Create a new local project directory called "js-dom-basics".
1. Add a local git repository.
1. Create a remote repository on Github.
1. Add a *main.js* file.
1. Add a simple `console.log("sanity check!")` in the *main.js* to verify that it's included correctly.
1. In git, add/commit locally, and then push your changes to Github.

## Discussion

Look over the *index.html* file before starting...

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript and the DOM - a primer</title>
</head>
<body>

  <section>
    <h1>Just a header</h1>
    <p id="main">Just a paragraph...</p>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
  </section>

  <script type="text/javascript" src="main.js"></script>

</body>
</html>
```

#### `getElementbyID`

Add the following code to your JavaScript file:

```javascript
var firstParagraph = document.getElementById('main');
console.log(firstParagraph);
```

Open the JavaScript console in Chrome. **What do you see?**

```javascript
<p id="main">Just a paragraph...</p>
```

**What does this give us?**

Since we are assigning the [DOM node](http://www.w3schools.com/jsref/dom_obj_all.asp) - `<p id="main">Just a paragraph...</p>` to a variable, we now have a reference to it. With the node in hand, we can now view its content (tags, attributes, inner text), manipulate/change any part of it (attributes, inner text, etc.), move it, or remove it altogether. JavaScript gives us this power!

Any node within the [document](http://www.w3schools.com/js/js_htmldom_document.asp), the root node, can be accessed via JavaScript. **What if we wanted to target (or access) the list?**

Without an `id` attribute, we need to use a different [method](http://www.w3schools.com/jsref/dom_obj_all.asp)...

#### `getElementsByTagName`

The 'getElementsByTagName' method returns a collection/array of nodes. These collections are "live", which means that if you add a new HTML element to the collection, it will also be added to the DOM. You can treat the collection just like you would a normal JavaScript array.

Add the following code to your JavaScript file:

```javascript
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements)

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)
```

Again, open your JS console. **What do you see?**

```javascript
[ul]

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
</ul>
```

The first example outputs the *entire* collection while the second example outputs the *first* (and only) element in the collection.

**Can you guess what the following code will do?**

```javascript
allListItems = unorderedList.getElementsByTagName('li');
```

Test it out. Assign it to a variable called `allListItems`, and then log the variable to the console. If all went well, you should see a collection that contains *all* `li`s.

Finally, let's loop through the collection, outputting each *individual* element to the console:

```javascript
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}
```

**What if we wanted to simply view the text within each list item, rather than the entire element?**

Simply update the loop like so:

```javascript
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}
```

**What will this do?**


```javascript
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);
```

Test it out!

#### `innerText` vs `innerHTML`

Research this on your own. **How would you construct the Google query to find a solution quickly?**

Ideally, after you search, you should find an answer within the first three results. If not, redefine your search, as, more often than not, the results are *unlikely* to be relevant. This begs the question - **What constitues a good search result?** Think about this for a minute - or two. Think about when you constructed a good search query vs. a poor search query. Which sites produced a good result? [StackOverflow](http://stackoverflow.com/), [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), and [w3schools JavaScript](http://www.w3schools.com/js/) generally yield good results. Overtime, you will find that as the complexity and granularity if the subject increase, the less you can rely on mainstream resources. Often you will have to rely on less popular topics on [StackOverflow](http://stackoverflow.com/) as well as personal blog posts. Keep this in mind. Practice. Practice. Practice.

#### `createElement`

FINISH DISCUSSION

## Actives

ADD ASSIGNMENT
