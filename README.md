
[![NPM version](https://badge.fury.io/js/naija-statecapital.svg)](https://npmjs.org/package/naija-statecapital)
[![Build Status](https://travis-ci.org/busayo/naija-statecapital.svg?branch=master)](https://travis-ci.org/busayo/naija-statecapital)
[![Coverage Status](https://coveralls.io/repos/busayo/naija-statecapital/badge.svg?branch=master&service=github)](https://coveralls.io/github/busayo/naija-statecapital?branch=master)
![](http://img.shields.io/badge/unicorn-approved-ff69b4.svg?style=flat)
![](https://img.shields.io/badge/unicodeveloper-approved-brightgreen.svg)


# naija-statecapital

A simple utility library that lists and allows for manipulation of states and capitals in Nigeria

### Installation

``` Javascript

npm install naija-statecapital

```

### Example

``` Javascript

var statesAndCapital = require('naija-statecapital');

console.log( "Returns a list of States", statesAndCapital.all);

console.log("Returns Abia state Capital" , statesAndCapital.all.Abia );

```


### Features

List all states and capital in Nigeria

### Tests

**Install Jasmine globally**
```Javascript
npm install jasmine -g
```
**Install jasmine-expect**
```Javascript
npm install jasmine-expect
```
**Run the tests**
```bash
npm test
```

