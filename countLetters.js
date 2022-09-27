const assertEqual = require('./assertEqual')

const countLetters = function(string) {
  let letterCount = {};
  let stringLetters = string.split("");
  for (let letter of stringLetters) {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter]++;
  }
  return letterCount;
};

// let tester = countLetters("lighthouse in the house");

// console.log(assertEqual(tester['h'], 4));
// console.log(assertEqual(tester['l'], 1));
// console.log(assertEqual(tester['i'], 2));

module.exports = countLetters;