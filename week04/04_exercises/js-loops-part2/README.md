# JavaScript Loops - part 2

1. Using the Yeoman [generator-galvanize-html](https://github.com/gSchool/generator-galvanize-html), generate a project boilerplate.
1. Solve each of the given problems, writing a loop that outputs the given output to the JavaScript console.
1. Use the following global variable for each of the problems -> `var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];`

### Example

#### Output in the console:

```sh
joe
carl
rachel
derek
lily
```

#### Solution

```javascript
for(var i=0; i < students.length; i++) {
 console.log(students[i]);
}
```

## Problems

**Problem 1**

```sh
joe
carl
rachel
derek
```

**Problem 2**

```sh
joe
rachel
lily
```

**Problem 3**

```sh
lily
derek
rachel
carl
joe
```

**Problem 4**

```sh
joe
carl
carl
rachel
rachel
derek
derek
lily
```
