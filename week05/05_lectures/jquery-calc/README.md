# Simple jQuery Calculator

## Quick Start

1. Generate a project boilerplate:

  ```sh
  yo galvanize-html
  Welcome to Galvanize's HTML Generator
  ? Bootstrap? Yes
  ? jQuery? Yes
  ? Underscore? No
  ? Jasmine tests? No
    create index.html
    create css/main.css
    create js/main.js
  ```

2. Update *index.html*:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>jQuery Calculator</title>

      <!-- stylesheets -->
      <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="css/main.css">

    </head>
    <body>

      <div class="container text-center">

        <h1>jQuery Calculator</h1>

        <hr>

        <div class="row">

          <div class="col-xs-4 col-xs-offset-1">

            <h2>Operands</h2>
            <div id="operands">
              <button class="btn btn-sm btn-primary">1</button>
              <button class="btn btn-sm btn-primary">2</button>
              <button class="btn btn-sm btn-primary">3</button>
              <button class="btn btn-sm btn-primary">4</button>
              <button class="btn btn-sm btn-primary">6</button>
              <button class="btn btn-sm btn-primary">7</button>
              <button class="btn btn-sm btn-primary">8</button>
              <button class="btn btn-sm btn-primary">9</button>
              <button class="btn btn-sm btn-primary">0</button>
            </div>

            <h2>Operators</h2>
            <div id="operators">
              <button class="btn btn-sm btn-danger">+</button>
              <button class="btn btn-sm btn-danger">-</button>
              <button class="btn btn-sm btn-danger">x</button>
              <button class="btn btn-sm btn-danger">%</button>
            </div>

          </div>

          <div class="col-xs-4 col-xs-offset-1">

            <h2>Screen</h2>
            <div id="screen" class="well"></div>
            <h2>Solution</h2>
            <div id="solution" class="well"></div>

          </div>

        </div>

      </div>

      <!-- scripts -->
      <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="js/main.js"></script>
    </body>
  </html>
  ```

## Code Along with Mike!

Steps..

### Housekeeping

### Structure

### Pseudocode

### Test

### Code

### Refactor
