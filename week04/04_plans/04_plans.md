# Week 4, Day 4

## Today's Goals

- Select elements and traverse the DOM using jQuery.
  - select elements by CSS selector
  - use jQuery’s each method to iterate over a selection
  - describe jQuery’s implicit iteration and the equivalent vanilla JS code.
    - For example: `$( 'div' ).html( 'New Stuff' );`
  - find child elements of a jQuery object with $(...).find(‘child selector’)
  - find all form controls using pseudo-selectors such as :text, :input, :checkbox etc…
  - describe that jQuery adds pseudo-selectors that CSS3 does not contain
  - find elements that are not a given selector with :not(...)
  - find the closest matching element with `$(...).closest(‘tr’)`
  - determine whether a given jQuery object matches a selector with `is` - `is(‘:checked’)`
  - determine whether a given jQuery object’s elements have a certain class with `hasClass`
  - explain that parent / child / sibling traversal can be brittle, and that combinations of `closest` and `find` can be more robust
  - write jQuery selectors that target multiple different selectors with $(.., …) using a comma
  - write chained jQuery methods
  - filter jQuery objects with `filter`

- Create, read and alter DOM w/ jQuery
  - create in-memory DOM elements from strings with `$(‘<div class=”foo”>’)`
  - append jQuery objects, strings and raw DOM elements to the DOM with `append`, `appendTo`, `insertAfter`, `after`, `before` etc…
  - remove elements with `remove()`
  - add, remove and toggle classes
  - set properties such as checked, style with `prop`
  - get the value of properties with `prop`
  - manipulate css with the `.css` method
  - get attributes with `attr`
  - set attributes with `attr`
  - use .val() to access input values
  - copy an element with `clone()`
  - describe that `prop` is appropriate for boolean attributes, whereas `attr` is appropriate for everything else
  - use the data method to access attributes set with HTML data attributes in two ways
    - `$(...).data(‘some-thing’);`
    - `$(...).data().someThing;`
  - describe why using data is preferable to `attr(‘data-behavior’)` for brevity and type coercion
  - replace elements using `replaceWith`
  - return the element’s `html()` and `text()`
  - set an element’s `html(...)` and `text(...)`
  - describe how many jQuery methods like `html()` and `text()` function as getters and setters
  - pull template text from a script tag with a type of text/x-template
  - use `show()` and `hide()` to...show and hide elements
  - use `fadeIn` and `fadeOut`, as well as other built-in effects like `slideUp()`
  - create custom effects with `animate()`

## 9am Standup

- Events, Helps, Interestings

## 9:15am Warm-up

- Debugging 101

## 10am Code!

## 12pm Lunch

Food.

## 1pm Code!

## 2pm Lecture!

- Event Bubbling!

## 2:30 Code!

## Exercises/Homework

- Fill out ZPD
