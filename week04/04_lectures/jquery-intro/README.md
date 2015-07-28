## JQUERY IS JUST A JAVASCRIPT OBJECT
``` JAVASCRIPT
var $ = function(){
    // 9200 lines of code
};
```
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

[Pros and Cons of jQuery](http://www.webdesignerdepot.com/2012/09/jquery-the-good-the-bad-and-the-ugly/)

### Document.ready
```Javascript
$(document).ready(function() {
 // code here
 });
```
Everything inside will load as soon as the DOM is loaded. Unlike the onLoad method, which is limited to only one function, the jQuery ready method allows for multiple functions to be loaded within it.

```
console.log("Does it work?")
```
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```
### jQuery Objectss

When creating new elements (or selecting existing ones), jQuery returns the elements in a collection. Similar to an array, it has a zero-indexed sequence of DOM elements, some familiar array functions, and a .length property. A jQuery object has access to many helper methods that simplify working with the dom. <https://learn.jquery.com/using-jquery-core/jquery-object/>

`document.getElementById( "target" )` is replaced by `$('#target')`

### Selectors

Use css syntax to target elements

* `$('h1')`
* `$('body')`
* `$('.alert') // class selector`
* `$('#killer') // id selector`
* `$("ul > li").length // child selector`
* `var $veggies = $(".carrot, .beet") // multi-selector`

Can prefix variable names with '$' to semantically denote a variable represents a Jquery object

### Methods

`$('body').html()` replaces the innerHTML javascript property

Polymorphic - methods change functionality based on # of arguments passed to it

```javascript
var $ulHTML = $('ul').html()
$('blockquote').html($ulHTML)
```
```javascript
$veggies.text()
$veggies.text("don't eat veggies")
$veggies.css('color')
$veggies.css('color', 'blue')
```
Other useful methods:
* `.val()`
* `.find()`
* `.hide()`
* `.show()`
* `.append()`
* `.prepend()`
* `.attr()`
* `.each()`
