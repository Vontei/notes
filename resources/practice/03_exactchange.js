/*

Write a function that takes the following arguments-

  1. Purchase Price
  2. Payment
  3. Cash-in-Drawer (see example below)

-and returns-

  1. the string "Insufficient Funds" if cash-in-drawer is less than the change due,
  2. the string "Closed" if cash-in-drawer is equal to the change due, or
  3. the change in coin and bills, sorted in highest to lowest order.

Example cash in drawer:

{
  penny: 1.03,
  nickel: 5.02,
  dime: 3.09,
  quarter: 4.25,
  one: 99.00,
  five: 65.00,
  ten: 20.00,
  twenty: 60.00,
  hundred: 100.00
}

PROCESS

1. Define problem
2. Break the problem down into smaller, bite-size pieces
3. Pseudocode each step (whiteboard it out, draw pictures, whatever!)
4. Turn psuedocode into code comments
5. Code iteratively (code, test, code, test...)

WHY THIS PROCESSS?

1. Programming is about problem solving, NOT syntax.
2. Most problems are TOO large to fully encompass in your head.
3. It's easy to use. It hones your logical abilities. It works for me.

*/


function exactChange(purchasePrice, payment, cid) {
  var change;
  return change;
}

var cashInDrawer = {
  penny: 1.03,
  nickel: 5.02,
  dime: 3.09,
  quarter: 4.25,
  one: 99.00,
  five: 65.00,
  ten: 20.00,
  twenty: 60.00,
  hundred: 100.00
};

exactChange(purchasePrice, payment, cashInDrawer);

