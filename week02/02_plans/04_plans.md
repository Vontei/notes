# Week 2, Day 4

## Today's Goals

Students will...

1. Get more Practice with JavaScript functions and the DOM

## 9am Standup

## 9:15am Warm-up

- https://css-tricks.com/dom/

## 10am The Dom

### The DOM

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

**The Document Object Model (DOM) is the interface between your HTML, CSS, and Javascript**

It provides a structural representation of the document, enabling the developer to modify its content and visual presentation. Essentially, it connects web pages to scripts or programming languages.

![DOM TREE](https://draftin.com/images/14599?token=MKs0x4-N3P6EUP7Ck44SRCKzaacjb2tbd6A9yYyaCIKn3jesWPnyy7KHsiFGiMJBtlBiECEnWmxmdBhHBcJfM5M)

The DOM specifies how browsers should create a model of an HTML page and how JS can access and update the contents of a web page while it is in the browser window.

* The model (the DOM tree) is made of objects.

Each object represents a different part of the page loaded in the browser window.

* These objects are often referred to as **nodes**. Each node is an object with methods and properties. (EXAMPLE: **getElementById, innerHTML)**

#### Accessing and updating the DOM tree involves 2 steps:

1. Locate the node that represents the element you want to work with.
1. Use its text content, child elements, and attributes to achieve the desired results

HINT: **Use a variable to store a reference to the object in the DOM tree (the location of a node).**

#### Event Listeners

- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

```javascript
var thing = document.getElementById("thing");

thing.addEventListener("click", function() {
  alert("You just clicked the thing!");
};
```

## 12pm Lunch

## 2pm DOM Exercise

- [Complete](https://github.com/gSchool/DOM_Intro_Exercise) as a table. Show an instructor when done!

## 3:30pm Intro to Pairing/Code!

- Function practice - part 2

## Exercises/Homework

- https://dom-tutorials.appspot.com/static/1.html
- https://github.com/gSchool/js-functions-part2
