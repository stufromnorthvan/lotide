const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Creating function that takes an array in allItems and counts instances of the element based on falsey and truthy values in an object variable called itemsToCount
const countOnly = function(allItems, itemsToCount) {
  //Create new variable that is empty object to create count
  let countObject = { };
  //Iterate through allItems array
  for (let i = 0; i < allItems.length; i++) {
    //Declare variable item to correspond to array value in allItems
    const item = allItems[i];
    //Check truth or false value of itemstoCount key value, while comparing key value and item variable
    if (itemsToCount[item]) {
      //Create 0 baseline to start count for key value
      if (!countObject[item]) {
        countObject[item] = 0;
      }
      //add 1 to key value in countObject object
      countObject[item]++
    }
  }
  return countObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);