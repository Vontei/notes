# Delegated Events

Let's create some DOM...

## JavaScript!

```javascript
//----------------------//
//   DELEGATED EVENTS   //
//----------------------//

// Allows a parent container to watch its descendents for a specific event
// if an element matching the target selector is the origin for the event, the callback fires

$('#delegate').on('click', '#minor-btn', function(){
  $('#delegate').append('<p>text</p>')
});
```




