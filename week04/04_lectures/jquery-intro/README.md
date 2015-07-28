# Intro to jQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

> jQuery is arguably the most popular library ever created. Of the top 10,000 websites, something like 50 to 60 per cent of them use jQuery.

## Getting Started

jQuery uses the global variable `$` as a shortcut. When utilized, it pulls in a ton of code:

```javascript
var $ = function(){
  // 9200 lines of code (loc)
};
```

[Pros and Cons of jQuery](http://www.webdesignerdepot.com/2012/09/jquery-the-good-the-bad-and-the-ugly/)

## `document.ready`

```javascript
$(document).ready(function() {
  // code here
});
```

Everything inside this function will load as soon as the DOM is loaded. Unlike the `onLoad()` method, which is limited to only one function, the jQuery `ready` method allows for multiple functions to be loaded within it.

Before you write any code, link your JavaScript file (`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>`) to your HTML document and run a sanity check:


```javascript
$(document).ready(function() {
  console.log("sanity check!")
});
```

## jQuery Objects

When creating new elements (or selecting existing ones), jQuery *often* returns the elements in a collection. Similar to an array, it has a zero-indexed sequence of DOM elements, some familiar array functions, and a `.length` property. A jQuery object has access to many helper methods that simplify working with the dom. Learn more [here](https://learn.jquery.com/using-jquery-core/jquery-object/).

Remember `document.getElementById( "target" )`? You can simplify it to `$('#target')`.

## Selectors

Use CSS-like syntax to target elements:

* `$('h1')` - select all H1s
* `$('h1, a')` - select all H1s and anchor tags
* `$('body')`
* `$('.alert') // class selector`
* `$('#killer') // id selector`
* `$("ul > li").length // child selector`
* `var $veggies = $(".carrot, .beet") // multi-selector`

You can prefix a variable name with '$' to semantically denote a variable to represent a jQuery object - e.g., `var $foo = $('.foo');`

## Methods

* `$('body').html()` replaces the `innerHTML` JavaScript property.

### Polymorphic Methods

Polymorphic methods change functionality based on # of arguments passed to it.

#### Example 1

```javascript
var $ulHTML = $('ul').html()
$('blockquote').html($ulHTML)
```

#### Example 2


```javascript
$veggies.text()
$veggies.text("don't eat veggies")
$veggies.css('color')
$veggies.css('color', 'blue')
```

#### Example 3

Other useful methods:
* `.val()`
* `.find()`
* `.hide()`
* `.show()`
* `.append()`
* `.prepend()`
* `.attr()`
* `.each()`

## Questions

1. Why would you want to cache a jQuery query/selector? For example = `var unorderedList = $('ul')`

1. What does the following code do?

  ```javascript
  $('li').css('color', 'red').text('yo!').width(50);
  ```

  Is the following code more readable?

  ```javascript
  $('li')
    .css('color', 'red')
    .text('yo!')
    .width(50);
  ```

  This is called "chaining".

1. What should be returned here `$('li').css('color')`?

1. What's polymorphism in jQuery?

1. What's the difference between `.append()`, `.prepend()`, and `.html()`?

1. What's happening here? Describe it in English.

  ```javascript
  var props = {color: "red", fontSize:"12px"};
  $("h1").css(props);
  ```

1. What do these methods do? What's the difference between a "getter" and a "setter"?
  - `.attr()`
  - `.toggleClass()`
  - `.text()`
