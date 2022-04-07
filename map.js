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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);

assertArraysEqual(results, ["g", "c", "t", "m", "t"]);
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map([], word => word[0]), []);