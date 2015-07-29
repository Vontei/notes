# Delegated Events

Let's create some DOM...

## Steps

1. ?
1. ?

## JavaScript!

```javascript
//----------------------//
//   DELEGATED EVENTS   //
//----------------------//

// Allows a parent container to watch its descendents for a specific event
// if an element matching the target selector is the origin for the event, the callback fires

$('#delegate').on('click', '.my-button', function(){
  $('#delegate').append('<button class="my-button">This a new button!!</button>')
});
```




