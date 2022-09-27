const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  let sentenceLetters = sentence.split("");
  for (x = 0; x < sentenceLetters.length; x++) {
    if (!results[sentenceLetters[x]]) {
      results[sentenceLetters[x]] = []
    }
      results[sentenceLetters[x]].push(x);
  }
  return results
};

// let tester = letterPositions("lighthouse in the house")

// console.log(assertArraysEqual(tester["l"], [0]))
// console.log(assertArraysEqual(tester["i"], [1, 11]))
// console.log(assertArraysEqual(tester["s"], [8, 21]))

module.exports = letterPositions