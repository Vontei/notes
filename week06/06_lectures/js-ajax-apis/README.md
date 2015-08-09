# AJAX and Web APIs - a primer

This article looks at how to utilize AJAX (asynchronous JavaScript and XML) to request data from an external server - e.g, a web API - and handle the returned data appropriately by making it accessible in the DOM.

1. [Objectives](#objectives)
1. [Key terms](#key-terms)
1. [Introduction to APIs](#introduction-to-apis)
1. [Utilizing API Data](#utilizing-api-data)
1. [Working with API Data](#working-with-api-data)
1. [API Restrictions and Workarounds](#api-restrictions-and-workarounds)
1. [Further Reading](#further-reading)

## Objectives

By the end of this lesson you should be able to...

- explain what AJAX stands for
- write code that grabs JSON data from an API and does something with it
- write syntactically valid AJAX calls using the jQuery methond `$.ajax`
- describe what happens when `$.ajax` is invoked - that it takes an object as an argument, that it makes an HTTP request, that the `then` functions fire on a 200 response, that the error functions fire on non-2xx responses
- write AJAX calls that send form parameters from an object
- write AJAX calls that send the request body as JSON
- define API
- discuss how APIs are used to connect services across the web
- define and describe JSON
- Use `JSON.parse()` to turn JSON into a JavaScript object.
- Use jQuery AJAX methods to hit an API and use the returned JSON to populate information on an web page
- explain the XMLHTTPRequest same domain policy
- explain the JSONP workaround to the same domain policy
- specify a JSONP callback parameter in an ajax request

## Key terms

1. AJAX
1. JSON
1. API
1. Web Service/Web API

## Setup

1. Create a new local project directory called "js-ajax-instagram".
1. Add a local git repository.
1. Create a remote repository on Github.
1. Create a project boilerplate with the [Galvanize HTML Gernerator](https://github.com/gSchool/generator-galvanize-html).
1. Update your *index.html* and *main.css* files from the code found [here](https://github.com/gSchool/g11-course-curriculum/tree/master/week06/06_lectures/js-ajax-instagram).
1. Finally, add/commit to your local git repo, and then push your changes to Github.

## Introduction to APIs

An [API](https://en.wikipedia.org/wiki/Application_programming_interface) is an Application Programming Interface. It provides a means for external, third parties to write code that interacts with the API provider. A [web service](https://en.wikipedia.org/wiki/Web_API) (or web API) is a type of API that generally operates over HTTP, allowing web developers to access third party data for use on their own websites. For example, you could utilize real estate data from the API provided by the New York Tomes to generate charts and graphs for your local real estate market.

Let's look at an example...

### IMDB

## Utilizing API Data

## Working with API Data

## API Restrictions and Workarounds

## Further Reading