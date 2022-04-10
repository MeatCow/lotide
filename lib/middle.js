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

const middle = (array) => {
  let output = [];

  if (array.length <= 2) {
    return output;
  }

  let centerIndex = array.length / 2;

  if (Number.isInteger(centerIndex)) {
    output.push(array[centerIndex - 1]);
    output.push(array[centerIndex]);
  } else {
    output.push(array[Math.floor(centerIndex)]);
  }

  return output;
};

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);