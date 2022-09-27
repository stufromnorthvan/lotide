const assertArraysEqual = require('./assertArraysEqual')

const without = function(source, itemsToRemove) {
  let newArray = [];
  newArray = newArray.concat(source);
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (newArray[x] === itemsToRemove[y]) {
        newArray.splice(x, 1);
      }
    }
  } 
  return newArray;
}

// assertArraysEqual([1, 2, 3], without([1, 2, 3, 4], [4]))

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without