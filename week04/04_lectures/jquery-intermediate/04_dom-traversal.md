# DOM Traversal

```javascript
//------------------//
//   DOM TRAVERSAL  //
//------------------//

// How we can navigate through the DOM tree to select elements

$('.buy-button').on('click', function(){
  // Making sure our event is attached properly
  // console.log('Click works!');

  // THIS keyword - is the event target
  // console.log(this);

  // can wrap THIS in jquery object to perform methods
  // $(this)

  // Remember - Jquery selections can be stored in variables
  var clickedButton = $(this)
  // console.log(clickedButton);

  // Get Text from event target
  // console.log( $(this).text() );

  // Selecting Price
  // Siblings Method
  // console.log( $(this).siblings('.price').text() );

  // Parent - Goes up ONE level to element's direct parent
  // console.log( clickedButton.parent() )

  // Children - Selects all children, optionally filtered by selector argument
  // console.log( $('.small-container').children().text('hello') );

  // Closest - Goes up through the DOM tree until it hits a direct ancestor matching selector
  // console.log( clickedButton.closest('.big-container') )

  // This will not work since h2 is not a direct ancestor
  // console.log( $(this).closest('h2') )

  // Find - Goes down through the DOM tree until it finds ALL descendents matching selector
  // console.log($('.big-container').find('h2'))

  // Chaining closest and find
  // console.log( $(this).closest('.big-container').find('h2').text() );
```
