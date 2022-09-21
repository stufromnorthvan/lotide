const eqArrays = function(arrOne, arrTwo) {
  let compareResult = true;
  if (arrOne.length !== arrTwo.length) {
    compareResult = false;
  }
  for (x = 0; x < arrOne.length; x++) {
    if (arrOne[x] !== arrTwo[x]) {
      compareResult = false;
    }
  }
  return compareResult
}

const assertArraysEqual = function(arrOne, arrTwo) {
  let compareResult = true;
  if (arrOne.length !== arrTwo.length) {
    compareResult = false;
  }
  for (x = 0; x < arrOne.length; x++) {
    if (arrOne[x] !== arrTwo[x]) {
      compareResult = false;
    }
  }
  if (compareResult === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
}

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

let tester = letterPositions("lighthouse in the house")

console.log(assertArraysEqual(tester["l"], [0]))
console.log(assertArraysEqual(tester["i"], [1, 11]))
console.log(assertArraysEqual(tester["s"], [8, 21]))