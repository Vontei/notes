# Testing with Jasmine - a primer

Let's learn how to test your code with [Jasmine](http://jasmine.github.io/), an automated testing framework for JavaScript...

<div style="text-align:center;">
  <img src="https://raw.githubusercontent.com/gSchool/g11-course-curriculum/master/week04/04_exercises/js-jasmine-primer/jasmine.png?token=AB7Ld8Nv28BPBzFYCQEqdQ0CuWz_M37iks5Vv3MqwA%3D%3D" width="400px">
</div>

1. [Overview](#overview)
1. [Setup](#setup)
1. [Discussion](#discussion)
1. [Activity](#activity)
1. [Stretch Goals](#stretch-goals)
1. [Reflect](#reflect)
1. [Further Reading](#further-reading)

## Overview

### Why should you care?

*Something that is untested is broken.*

If your codebase is untested then it is **very** difficult to add new features as-

- You don't know if that feature will work or not, and
- The new feature could break your existing codebase.

Automated tests help minimize these issues, allowing you to safely update your codebase and sleep at night. Unfortunately, many developers don't understand the importance of testing until their application breaks and s/he is up all night trying to fix things.

Read more [here](http://stackoverflow.com/questions/67299/is-unit-testing-worth-the-effort).

### Objectives

- Discuss the benefits of testing. How does it help developers do their job more effectively?
- Write tests for existing code.
- Write code to pass a given set of tests.
- Write tests and code that passes those tests.

### Key terms

- TDD
- BDD
- Jasmine
- Spec
- Suite
- Expectation

## Setup

> Always refer to the [Jasmine Docs](http://jasmine.github.io/) for help.

1. Install Jasmine globally via NPM:

  ```javascript
  $ npm install -g jasmine
  ```

1. CD into the "js-jasmine-primer" directory, and then [initialize Jasmine](http://jasmine.github.io/2.0/node.html#section-Init_a_Project) to create a "spec" directive and a JSON configuration file:

  ```javascript
  $ jasmine init
  ```

1. Try running the tests with the `jasmine` command. You should see:

  ```sh
  $ jasmine
  Started


  No specs found
  Finished in 0.001 seconds
  ```

1. Add a spec file called *spec.js* to the "spec" directory and add the following code:

  ```javascript
  var code = require('../main.js');


  describe('', function() {
    it('', function() {

    });
  });
  ```

  **What are spec files?** Read about them from the [offical documentation](http://jasmine.github.io/2.0/introduction.html).

1. Finally, add a *main.js* file to the root directory.

With the setup complete, we can now start writing some tests!

## Discussion

All examples follow this three step process..

1. Place the Jasmine tests inside of *spec/spec.js*.
1. Add your code to test to *main.js*
1. Run your tests.
1. Refactor (if necessary)

Test time!

### First Test: Hello World

Per tradition, let's start with a basic "Hello, World!"

#### Function

```javscript
exports.outputHelloWorld = function () {
  return "Hello, world!";
};
```

#### Test

```javascript
describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});
```

**What's happening here?**

First off, we have a suite and a spec (which contains and expectation). Read more about each of those terms [here](http://jasmine.github.io/2.0/introduction.html). In essence, a suite takes a string that describes what a particular suite is testing. The spec uses JavaScript to test the state of the code being tested via an expectation - test the *expected* state against the *actual* state (the output of the code being tested).

#### Test!

Run the test. If all went well, you should see:

```javascript
jasmine
Started
.


1 spec, 0 failures
Finished in 0.004 seconds
```

**What happens if you change the output of the function to `return "Hello!";`?** Run the test again to see. Pay attention to the output in the terminal.


### Second Test: Taxes

Give the following tax system, what kind(s) of tests can we write?

1. The first $10 is taxed at 10%
1. The second $10 is taxed at 7%
1. The third $10 is taxed at 5%
1. Everything after that is taxed at 3%

#### Test

Add the following test suite to *spec.js*:

```javascript
describe('Tax Calculator', function(){
  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).toEqual(.1)
    expect(code.calculate(10)).toEqual(1)
  })

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).toEqual(1.35)
 });

});
```

####Exercise

Write tests for a leap year calculator.  Write a function which takes a year as an argument and returns true if it's a leap year and false otherwise. Here are the rules we'll use:

```
every year whose number is perfectly divisible by four is a leap year,
except for years which are both divisible by 100 and not divisible by 400.
1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.
```

* Start by identifying a bunch of test cases
* Write a test
* Make it pass
* Write a test
* Make it pass
* Repeat a bunch of times

**Question** What is the difference between `toBe()` and `toEqual()`?
