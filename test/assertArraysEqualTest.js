const assert = require('chai').assert;
let assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])// => false
