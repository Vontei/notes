hmm...

What if you only wanted to remove ONE `p` tag?


```javascript
$('p').on('click', function(event) {
  $('p').remove();
  event.stopPropagation();
});
```
