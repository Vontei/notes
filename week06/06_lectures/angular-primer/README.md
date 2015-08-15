# Angular - primer

## Setup

1. Install an HTTP-Server - `npm install http-server -g`
1. Test - `http-server`
1. Install the [Yo! Galvanize HTML Generator](https://github.com/gSchool/generator-galvanize-html)
1. Create the main boilerplate:

  ```sh
  yo galvanize-html
  Welcome to Galvanize's HTML Generator
  ? Bootstrap? No
  ? Normalize.css? No
  ? jQuery? No
  ? Underscore? No
  ? Jasmine tests? No
    create index.html
    create css/main.css
    create js/main.js
  ```

## Hello World!

Update this:


```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Untitled</title>

    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>
  <body>

    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
```

To this:

```javascript
</html>
<!DOCTYPE html>
<html lang="en" ng-app="">
  <head>
    <meta charset="utf-8">
    <title>{{ greeting }} World</title>
    <!-- stylesheets -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
  </head>
  <body>
    <p>Say something to the world - <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
    <p>{{ greeting }} world!</p>
    <!-- scripts -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </body>
</html>
```

1. Within the project directory, run `http-server`, and then navigate to [http://localhost:8080/](http://localhost:8080/). Test it out.

## What is Angular?

Angular is designed for creating dynamic, [single page applications](https://en.wikipedia.org/wiki/Single-page_application) as well as full web applications within the Model View Controller (MVC) pattern (Or, more precisely: the [MVVM](http://www.dotnet-tricks.com/Tutorial/designpatterns/2FMM060314-Understanding-MVC,-MVP-and-MVVM-Design-Patterns.html) pattern).

Working within the MVC paradigm, it's easy to add/bind data to your page, which automatically updates because the framework is always watching for changes. Put another way, with Angular, we can write front-end code without having to directly manipulate the DOM. It's also easy to learn since it works directly with HTML, by simply extending its functionality.

Before we start building, read over some of Angular's main features:

1. **[Templates](http://docs.angularjs.org/guide/templates)**: Templates reside directly in your HTML.
2. **[Two-way data binding](http://docs.angularjs.org/guide/databinding)**: Changes to your Javascript automatically update the DOM. In other words, it doesn't require an explicit refresh.
3. **[Routing](http://docs.angularjs.org/api/ngRoute/service/$route)**: Routing represents the possible application states; controllers and templates are employed to serve this purpose.
4. **[Directives](http://docs.angularjs.org/guide/directive)**: Directives are used for extending HTML with new functionality as well as encapsulating code for easy reuse.

> Today we will focus on templates, two-way binding, and directives.

## Your turn!

Using your information retrieval skills, define the following directives from the [Angular site](https://angularjs.org/):

1. `ng-app`:
1. `ng-model`:

What does the `ng` prefix mean?

Also, in your own words, define:

1. Two-way binding:
1. Templates:

Finally, what's with the double curly braces, `{{` `}}`, in the template?

### Finished early?

Define:

1. `ng-repeat`:
1. `ng-if`:

Read through the following basic intro - [AngularJS Introduction](http://www.w3schools.com/angular/angular_intro.asp)
