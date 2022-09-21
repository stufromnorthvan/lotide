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
};

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
  return compareResult;
};

const middle = function(array) {
  middleArray = [];
  if (array.length > 2) {
   if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor((array.length - 1) / 2)])
   } else if (array.length % 2 === 0) {
    middleArray.push(array[Math.floor((array.length - 1) / 2)])
    middleArray.push(array[Math.ceil((array.length - 1) / 2)])
   }
  } else {
    middleArray = [];
  }
  return middleArray
}
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]))
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 7]))