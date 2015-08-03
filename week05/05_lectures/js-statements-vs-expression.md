# Statements vs Expression

In JavaScript an **expression** *produces at least one value*, while a **statement** *performs an action*.

## Example

```javascript
var num = 10;

// statement
if(num === 10) {
  num += 10;
} else {
  num += 0;
}

// expression
num === 10 ? num += 10 : num += 0;
```

Which of these returns a value? You can test this by wrapping each in a `console.log`, like so:

```javascript
var num = 10;

// statement
console.log(
  if(num === 10) {
    num += 10;
  } else {
    num += 0;
  }
);

// expression
console.log(num === 10 ? num += 10 : num += 0);
```

The statement will throw an error.

## Additional Resource

[Expressions Versus Statements](http://speakingjs.com/es5/ch07.html#expr_vs_stmt)
