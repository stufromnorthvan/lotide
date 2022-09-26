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
};

module.exports = middle;