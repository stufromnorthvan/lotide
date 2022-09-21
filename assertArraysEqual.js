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
  if (compareResult === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
}

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1]) 

eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])