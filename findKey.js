const assertEqual = require('./assertEqual')

const findKey = function(object, callback) {
  for (let objectKey in object) {
  if (callback(object[objectKey])) {
    return objectKey;
    }
  }
};


// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// const result2 = findKey ({
//   "Waterfront Park":  { benches: 5},
//   "11th Street Dog Park": { benches: 1 },
//   "Lou Tet Park": { benches: 10 },
//   "Emerald Park": { benches: 7 }
// }, x => x.benches > 9) // => "Lou Tet Park"

// assertEqual(result1, "noma")
// assertEqual(result2, "Lou Tet Park")

module.exports = findKey