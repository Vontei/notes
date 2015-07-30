# Event Bubbling

Bursting the bubble..

## Example!

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling</title>
</head>
<body>
  <div id="outer-div">
    <div id="middle-div">
      <div id="inner-div"></div>
    </div>
  </div>
</body>
</html>
```

### JavaScript

```javascript
//--------------------//
//   EVENT BUBBLING   //
//--------------------//

// When an event is triggered on a DOM element, that event is "bubbled" up to the parent elements, triggering events on each.


// What happens here?

$("#outer-div").on('click', function() {
  console.log('outer div!');
});
$("#middle-div").on('click', function() {
  console.log('middle div!');
});
$("#inner-div").on('click', function() {
  console.log('inner div!');
});

// How do you prevent the bubbling?

$("#outer-div").on('click', function() {
  console.log('outer div!');
});
$("#middle-div").on('click', function() {
  console.log('middle div!');
});
$("#inner-div").on('click', function(event) {
  console.log('inner div!');
  event.stopPropagation();
});
```
