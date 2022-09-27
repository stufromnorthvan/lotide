const assertArraysEqual = require('./assertArraysEqual')

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length)
// const results3 = map(words, word => word.toUpperCase())

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
// assertArraysEqual(results2, [6, 7, 2, 5, 3])
// assertArraysEqual(results3, ["GROUND","CONTROL","TO","MAJOR","TOM"])

module.exports = map


