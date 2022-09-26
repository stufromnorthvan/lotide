const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js')

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]) // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 7]) // => false