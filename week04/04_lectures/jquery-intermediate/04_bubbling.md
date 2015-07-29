hmm...

What if you only wanted to remove ONE `p` tag?


```javascript
$('#add-btn').on('click', function(event) {
  $('#paragraphs').append('<p>new<p>');
});

$(document).on('click', 'p', function(event) {
  $(this).remove();
  event.stopPropagation();
});
```
