# Lotide

A lite clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production.**

This project was created and published by me as part of my learnings. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Compares 2 arrays and provides a console output indicating deep equality. Returns undefined.
* `assertEqual(actual, expected)`: Performs a strictly equal value evaluation and provides a console output indicating equality. Returns undefined.
* `assertObjectsEqual(actual, expected)`: Compares 2 objects and provides a console output indicating deep equality. Returns undefined.
* `countLetters(string)`: Returns an object mapping each letter from input string, to it's number of appearances
* `countOnly(allItems, itemsToCount)`: Filters an array, returning an object containing the frequency of each value. Filters the output using true values in itemsToCount. 
* `eqArrays(actual, expected)`: Performs a deep equality check on input arrays. Returns true or false.
* `eqObjects(actual, expected)`: Performs a deep equality check on input objects. Returns true or false.
* `findKey(object, callback)`: Returns the first index on which callback(value) evaluates to true. 
* `findKeyByValue(object, inputValue)`: Returns the first index for which the object value matches the inputValue
* `flatten(object, opt: output)`: Performs a recursive flatten on the passed in array, and returns a new array without modifying the old one
* `head(array)`: Returns the first element of an array. Returns undefined if no elements or not an array.
* `letterPositions(sentence)`: Returns a map of arrays containing the indexes of every occurence of a letter. Key is letter, value is array of indexes.
* `map(array, callback)`: Returns a new array after performing callback(value) on every element.
* `middle(array)`: Returns a new array containing the middle elements from parameter array. New array contains 2 elements if length is even, 1 element if length is odd.
* `tail(array)`: Returns every element, except the first, in a new array.
* `takeUntil(array, callback)`: Returns a new array, containing every element from the start of the array, until the callback(value) evaluates to true. Does not include element that caused said evaluation.
* `without(arrayIn, arrayFilter)`: Returns a new array containing every element from arrayIn, that was not found in arrayFilter.