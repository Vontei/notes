# DOM Traversal

Let's do some DOM traversal...

## Steps

1. Navigate through the DOM tree to select specific elements

## JavaScript!

```javascript
//------------------//
//   DOM TRAVERSAL  //
//------------------//


$('#main-btn').on('click', function(){

  // Why do we do this?
  console.log('sanity check!');

  // What is `this`? Event target. Context.
  console.log(this);

  // Create a jQuery object to perfrom jQuery methods on `this`
  $(this)

  // cache it ... save it for later
  var clickedButton = $(this)
  console.log(clickedButton);
  console.log($(this).text());

  // What's the difference between a "getter" and a "setter"?

  // Siblings
  console.log($(this).siblings());

  // Parent - Goes up ONE level
  console.log(clickedButton.parent())

  // Children - Selects all children
  console.log($('container').children());

  // Closest - Goes up through the DOM tree until it hits a direct ancestor
  console.log(clickedButton.closest('.container'))

  // Find - Goes down through the DOM tree until it finds ALL descendents matching selector
  console.log($('.container').find('h1'))

  // Chaining closest and find
  console.log($(this).closest('.container').find('h1').text() );
});
```
