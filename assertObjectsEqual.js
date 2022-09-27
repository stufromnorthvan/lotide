const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(objOne, objTwo) {
  const inspect = require('util').inspect;
  let compareResult = true;
  if (!eqObjects(objOne, objTwo)) {
    compareResult = false;
  }
  if (compareResult === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(objOne)} === ${inspect(objTwo)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(objOne)} !== ${inspect(objTwo)}`);
  }
}


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };


// assertObjectsEqual(cd, dc)

module.exports = assertObjectsEqual;
