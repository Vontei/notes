# Week 1, Day 5

## Today's Goals

- Review the week in small groups.
- Take 2 small assessments.
- Become familiar with JS loops (while and for) and conditionals (if/else)!

## 9am Standup

- Events, Helps, Interestings

## 9:15am Warm-up

- Survey (with Reyna)

## 9:30- Assessments
- Command Line
- Git basics
- JavaScript variables

## 10:00 Weekly Review
- small groups

##   Javascript Basics: Conditionals, Loops
 With Zach

### Objective

Learn and be able to __apply__ conditionals and loops to problem solving.  Learning the syntax will be the first step, but once you've got that down, focus on problem solving.

### Conditionals

Conditionals control the flow of a program.  Conditionals decide which code statements gets run based on some input to the conditional.  An example from everyday life would be:

```
If you spend $100 or more, then you get 20% off, otherwise the purchase is full price
```

In the example above, the input to the conditional is the total amount of your purchase.

### If

The most basic control flow statement is the ```if``` statement.  Here is our example from above in code:

```
var total = 284; // Some value

if ( total >= 100 ) {
   total = total * .8;
}

// More code to display the total to the user

console.log("Your total is: $" + total.toFixed(2));

```

#### Exercise

Write a program that prompts for a users name, then says hello to the user. The program should have a special hello prompt if the user enters your name.  Here is an example input and output:

```
> Please enter your name: Zach

Hello Zach.  What are you doing here?

> Please enter your name: Michael

Hello Michael!! Welcome back.
```

### Multiple If Statements

A program can have multiple if statements when we have multiple control flow needs.  For example, we could have a special greeting for multiple names:

```
var name = prompt("Please enter your name:");

if (name === "Michael") {
   console.log("Michael Welcome Back.");
}

if (name === "Zach") {
   console.log("Hello Zach!  Stop messing with my computer");
}

if (name !== "Colt" && name !== "Tim") {
   console.log("Hello " + name + ".  What are you doing here?");
}
```


### If, else

The multiple if statement code we've written so far can get a little confusing.  It is really more suited for an if else control flow statement.  If else statements work together.  Here is the basic flow and syntax:

```
if ( /*some expression */) {

    // If the expression is true, run this code

} else {

    // If the expression was false, run this code instead.

}
```

We can string together if else statements like this:

```
if ( /*some expression */) {
    // run this code
} else if ( /* some other expression */ ) {
    // run this code only if the first expression is false and this expression is true
} else {
    // run this code if the first two expressions were false
}
```

### Booleans and Comparison Review

Let's take a minute to review booleans and comparisons.  What does the following expression evaluate to?

```
var bankAccount = 7000; // I'm rich in most cities other than SF
var RENT = 3000;
var CAR_INSURANCE = 250;
var COMCAST = 115; // Way too expensive
var CAR_PAYMENT = 120;
var NEW_PET_COST = 3000; // An extravagant pet
var funSpending = prompt("How much fun money are you going to spend? ");
var areYouFinanciallyWise = prompt("Are you financially wise? ");

if (areYouFinanciallyWise === "no") {
    areYouFinanciallyWise = false;
} else {
    areYouFinanciallyWise = true;
}

if ((bankAccount > RENT + CAR_INSURANCE + CAR_PAYMENT + COMCAST + funSpending) || !areYouFinanciallyWise) {
     console.log("Congrats, you are buying a new pet liger (half tiger, half lion) name fluffy.");
} else {
     console.log("Sorry, no pets for you");
}
```

### Loops

Loops are essential to programming. They allow us to repeat an operation many times. Typically, execution of a loop lasts as long as a certain value holds true. The first type of loop we'll talk about is a for loop

### For Loops

For loops are common in C style programming languages.  They are a concise way to express how a loop should be initialized, how long a loop should run, and what action should be taken at the end of each iteration.  The general syntax is below:

```
for (initialization; conditional; post loop increment) {
    // Some code to run.
}
```

Here is an example where we print the numbers 1 to 10:

```
for (var i = 0; i < 10; i++) {
   console.log(i + 1);
}
```

### While loops

A while loop is another way of constructing a loop.  Here is the syntax:
```
while ( /* Boolean expression */ ) {
    Execute code
}
```

Here is an example:

```
var timesForPhrase = 10;
var phrase = prompt("What do you want to say " + timesForPhrase + " times?");

var i = 0;
while (i < timesForPhrase)  {
   console.log(phrase);
   i++;
}

```

## 12pm Lunch

```
function eat() {
  if(hungry){
    return "GO EAT"
  }
};
```

## Exercises

1. Write code to output the numbers 1 to 10.  This time make sure to use a while loop instead of a for loop.
1. JavaScript Conditionals
1. JavaScript Loops

## 4:00 Friday EOD

- Lightning Talks Intro (what are they and when) with Reyna
- EOD with Mike


## Homework

Create new repos for each of these.

- **99 Bottles:** Write code to print out the lyrics to 99 bottles of beer on the wall.  Pay attention to pluralization!
- **Odd Numbers** Write code to print all the odd numbers between 1 and 1337.
- **Temperature Convertor** Write code that asks the user for a temperature in Celsius and converts it to Fahrenheit.  Bonus: ask the user first if they want to convert from F to C or C to F.
