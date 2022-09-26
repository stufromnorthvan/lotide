const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arrOne, arrTwo) {
  let compareResult = false;
  if (eqArrays(arrOne, arrTwo)) {
    compareResult = true;
  }
  if (compareResult === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

module.exports = assertArraysEqual;