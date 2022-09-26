const assertEqual = require('../assertEqual.js');


assertEqual("Lighthouse Labs", "Bootcamp"); // => false
assertEqual(1, 1); // => true

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // => true

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 2); // => true

// eqArrays([1, 2, 3], [1, 2, 3])
// eqArrays([1, 2, 3], [3, 2, 1]) 
// eqArrays(["1", "2", "3"], ["1", "2", "3"])
// eqArrays(["1", "2", "3"], ["1", "2", 3])

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false