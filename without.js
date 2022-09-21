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
console.log(without([1, 2, 3], [1]));

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

assertArraysEqual([1, 2, 3], without([1, 2, 3, 4], [4]))

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);