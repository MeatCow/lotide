const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length === expected.length) {
      return actual.every((value, index) => value === expected[index]);
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = (source, itemsToRemove) => {
  return source.filter(element => !itemsToRemove.includes(element));
};

let initialArray = [1, 2, 3];
let newArray = without(initialArray, [1, 2]);

assertArraysEqual(initialArray, [1, 2, 3]); // Assert that initial array is not modified
assertArraysEqual(newArray, [3]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);