# Event Bubbling

Bursting the bubble..

## Example!

### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling</title>
  <!-- stylesheets -->
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>

  <div class="container text-center">

    <div id="outer-div">
      <p>Outer Divider</p>
      <div id="middle-div">
        <p>Middle Divider</p>
        <div id="inner-div">
          <p>Inner Divider</p>
        </div>
        <br>
        <div id="inner2-div">
          <p>Inner 2 Divider</p>
        </div>
      </div>
    </div>

  </div>

  <!-- scripts -->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

![]()

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
$("#middle-div").on('click', function(event) {
  console.log('middle div!');
});
$("#inner-div").on('click', function() {
  console.log('inner div!');
});
$("#inner2-div").on('click', function() {
  console.log('inner2 div!');
});

// How do you prevent the bubbling?

$("#outer-div").on('click', function() {
  console.log('outer div!');
});
$("#middle-div").on('click', function(event) {
  console.log('middle div!');
  event.stopPropagation();
});
$("#inner-div").on('click', function() {
  console.log('inner div!');
});
$("#inner2-div").on('click', function() {
  console.log('inner2 div!');
});
```
