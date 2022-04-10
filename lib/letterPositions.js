const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length === expected.length) {
      return actual.every((value, index) => value === expected[index]);
    }
  }
};

const assertObjectArraysEqual = function(actual, expected) {
  let areEqual = true;

  for (const [key, value] of Object.entries(actual)) {
    if (!eqArrays(value, expected[key])) {
      areEqual = false;
    }
  }
  if (areEqual) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const output = {};
  sentence = sentence.toLowerCase().split("");

  for (let [index, char] of sentence.entries()) {
    if (!/[a-z]/g.test(char)) {
      continue;
    }
    if (!output[char]) {
      output[char] = [];
    }
    output[char].push(index);
  }

  return output;
};

const expected = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

const inputString = "lighthouse in the house";
const outputObject = letterPositions(inputString);

console.log(expected, outputObject);

assertObjectArraysEqual(expected, outputObject);