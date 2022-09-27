const assertEqual = require('./assertEqual')

let findKeyByValue = function(object, value) {
  for (let objectKey in object) {
    if (value === object[objectKey]) {
      return objectKey;
    }
  }
};

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue