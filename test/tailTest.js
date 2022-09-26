const assert = require('chai').assert;
// const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [ 2, 3 ]);
  });
  it("returns [3, 4, 5, 6] for [2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([2, 3, 4, 5, 6]), [3, 4, 5, 6]); 
  });
});

console.log(tail([1, 2, 3]))