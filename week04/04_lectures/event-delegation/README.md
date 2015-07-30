# Event Delegation

Let's say that you have one million anchor tags in your document and that you only want to add an event to those that are children of an `<ul></ul>` - you would handle this with event delegation.

## HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Delegation</title>
</head>
<body>

  <ul>
    <li><a href="#">Anchor 1</a></li>
    <li><a href="#">Anchor 2</a></li>
    <li><a href="#">Anchor 3</a></li>
    <li><a href="#">Anchor 4</a></li>
    <li><a href="#">Anchor 5</a></li>
    <li><a href="#">Anchor 6</a></li>
  </ul>
  <a href="#">Anchor outside unordered list</a>

  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

## JavaScript

```javascript
$(document).ready(function() {

  console.log( "ready!" );

  $('ul').on('click', 'a', function(event) {
    console.log($(event.target));
  });

});
```

