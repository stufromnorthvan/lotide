# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install stufromnorthvan/lotide`

**Require it:**

`const _ = require('stufromnorthvan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*   `head(array)` : returns index 0, or first value, of an array.
*   `tail(array)` : returns array without index 0, or first value.
*   `middle(array)` : returns middle value of an array. if array is                                 even-numbered, returns 2 middle values.
*   `assertArraysEqual(array1, array2)`: returns true if arrays equal, false if                                        not.
*   `assertEqual(value1, value2)`: returns true if values are equal, false if not.
*   `assertObjectsEqual(object1, object2)` : returns true if objects are equal,                                            false if they are not.
*   `countLetter(string)`: counts letters in a string. string can be given an                            index value of letter to count one particular letter.
*   `countOnly(array1, argument)`: loops through an array and counts only                                        instances of the argument. argument can be an                                 object with booleans to satisfy multiple                                      conditions.
*   `eqArrays(array1, array2)`: returns true if arrays are equal, false if they                               are not.
*   `eqObjects(object1, object2)`: returns true if objects are equal, false if they are not.
*   `findKey(object, callback)`: finds key with callback                                                       function
*   `findKeyByValue(object, value)`: finds key in object based off object value.
*   `letterPositions(string)`: shows the index position(s) of letters in a given                             string. formula can be given an index value to                                count one particular letter.
*   `map(array, callback)`: edits all elements of an array with a callback                                function.
*   `takeUntil(array, callback)`: goes through elements of an array until a given                               character, specified by callback function.
*   `without(array, itemsToRemove)`: goes through an array and removes                                             itemsToRemove.
