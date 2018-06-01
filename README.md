# Feed Reader Testing - Jasmine

## Table of Contents

* [Description](#description)
* [Instructions](#instructions)
* [Getting Started](#getting-started)
* [Contributing](#contributing)

## Description

This is a feed reader test using the unit testing library called Jasmine. The purpose is to test code for possible errors and tell it what result to "expect". This helps to refactor code and to anticipate possible breaking points of code. 

## Instructions


1) Open the app.js and the feedreader.js files in your code editor
2) Open the index.html file in your browser
3) We will now break the code. Take line 20 of the feedreader.js file - it('are not defined') - and you will realize that it ensures the allFeed array in the app.js line 10, not to be undefined or empty.
You can test this by deleting the content of the allFeed array and refreshing the browser with opened index.html file. 

Scrolling down by a page length, you will see that Jasmine now throws an error exactly where our test fails now. The RSS feed that should be defined is now undefined, hence we have an error. Once content is reinserted in the allFeeds array in app.js, Jasmine will display that all our tests pass.

This can be done with all the tests in the feedreader.js, which ensure that the code in app.js is functioning properly.

## Getting started

### Installing


The code can be accessed, forked and cloned here:
https://github.com/ChristineReffo/frontend-nanodegree-feedreader

The index.html file needs to be opened in a browser
The app.js and feedreader.js file need to be opened in a code editor

### Dependencies

These files have the following code dependencies:
1. ES6
2. Jasmine
3. JQuery
4. Google Feed Reader API
5. Handlebar library


## Contributing

This is a Udacity student project. Contributors are welcome to send pull requests, which will be considered once the project has been reviewed and it passed all requirements.


### Author

Original code structure: Udacity  
Javascript feedreader.js, as required: Christine Reffo


### License

This project is not licensed.


### Acknowledgments

Udacity

