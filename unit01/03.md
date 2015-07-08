## Today's Goals

Students will...

- Review how to use HTML to build a webpage
- Understand the difference between HTML `tags`, `elements`, and `attributes`
- Be able to articulate the difference between HTML syntax and semantics
- Build a simple webpage using semantic markup  

> NOTE: We will just be going over the very basics of HTML and CSS; we will take a much deeper dive later in the cohort.

## 9am Standup

- Events, Helps, Happenings  

## 9:15am Warm-up

- [Type racer](http://play.typeracer.com/) (Robbie vs ??)

## 9:30am How to Submit Assignments/Student Site Overview

- [Gist](https://gist.github.com/mjhea0/3c0f4fee2d4179863bfc)
- With Zach

## 10am HTML/CSS Exercise

- HTML and CSS Tutorial (only do the HTML part!)

## 12pm Lunch

Go eat.

## 1pm HTML and CSS - primer

With Michael or Zach or Reyna

### HTML Boilerplate

Build a basic site, starting with-

```html
<!-- Defines the html version (for the browser) -->
<!DOCTYPE html>

<!-- Sets up the html element and defines the language to use -->
<html lang="en">

  <!-- Meta information about our html document -->
  <head>

    <!-- Defines the character set to use in the document -->
    <meta charset="utf-8">

    <!-- Sets the title of the page -->
    <title>Awesome Title</title>

    <!-- Pull in stylesheet normalization for cross-browser support -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.css">

    <!-- Pull in our own custom css file -->
    <link rel="stylesheet" href="main.css">

  </head>

  <!-- Defines the page content - e.g., what the end user sees -->
  <body>

    <!-- A header tag and element -->
    <h1>This is an Awesome header</h1>

    <!-- Use classes to identify unique-ish elements -->
    <h2 class="header-alt">Another header</h2>
    <h3 class="header-alt">Sub header</h3>

    <!-- Use an ID to identify actual unique elements -->
    <h4 id="header-primary">This is an h4</h4>

    <!-- Hierarchy -->
    <div>
      <p>(INSIDE) Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>

    <p>(OUTSIDE) Adipisci vero quae, a possimus impedit praesentium eaque beatae magni ea nihil.</p>

  </body>
</html>
```

### What is HTML?

- HTML *describes* and applies *structure* to a page; it's the skeleton.
- Browsers *parse* and then *render* the HTML so that it's human-readable.

### Tags Make Elements

HTML `tags` are used to wrap content - generally text.

```html
<p>Some text.</p>
```
The tags above are `<p>` & `</p>`.

When tags are used, they form an HTML `element`. The use of tags `p` tags surrounding text above creates an HTML element.

### Self-closing or void tags

Some tags are self-closing and do no need to wrap content.

```html
<img src="foo.com/thing.png">
```

```html
<input value="Input Here!">
```

```html
<hr>
```

### Attributes

`elements` often have `attributes` to generate content or to act as a reference for other technologies like CSS & JS.

This image has a `source` and `alt` attribute.

```
<img src="foo.com/thing.png" alt="A cool image of a foo thing.">
```

This `anchor` link has an `href` attribute.

```html
<a href="/contact">Contact Page</a>
```

This title has a `class` attribute.

```html
<h1 class="content-title">You Will Never Guess What This Puppy Does With Her Brunch.</h1>
```

#### Building Blocks
1. html
1. head
1. body
1. script
1. link
1. title
1. meta
1. style

#### Media
1. img
1. video
1. audio

#### Typography
1. p
1. h1 - h6
1. a
1. em
1. strong
1. small
1. blockquote
1. ul
1. li
1. ol

#### Layout
1. main
1. section
1. article
1. header
1. footer
1. hr
1. nav
1. div

#### Semantic Markup
1. article
1. aside
1. header
1. footer
1. nav
1. main
1. section

### CSS

CSS = Cascading Style Sheets. Why?

```css
/* Select by tagname */
h1 {
  color: red;
}

/* Select by classname */
.header-alt {
  border-bottom: 2px solid red;
}

/* Select a single element by its ID */
#header-primary {
  text-transform: uppercase;
}

/* Select all H1s AND all .header-alts */
h1,
.header-alt {
  border-top: 2px solid blue;
}

/* Use descendent selectors */
div p {
  font-style: italic;
}

/* Target all p's and a's inside of divs */
div p, div a {}
```

## 2pm Exercises

- Mock Ups
- Card Flip

## 4pm Website Presentation

- Present your personal site in groups! (start with the finished product, then highlight the code)

## Bonus!

- [Dive Into HTML5](http://diveintohtml5.info/semantics.html)

## Homework

- Refactor your personal website to use **semantic markup** (push to Github)
- Read Introduction and Chapter 1 in [Eloquent JS](http://eloquentjavascript.net/)
