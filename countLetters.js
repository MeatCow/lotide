const eqObject = (actual, expected) => {
  if (actual === expected) {
    return true;
  }

  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  }

  for (const [key, value] of Object.entries(actual)) {
    if (expected[key] !== value) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (eqObject(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (inputString) => {
  const output = {};
  inputString = inputString.toLowerCase().matchAll(/[a-z]/g);

  for (let char of inputString) {
    if (!output[char]) {
      output[char] = 0;
    }
    output[char]++;
  }

  return output;
};

const input = "This is my string, hear me roar!";
const expected = {
  t: 2,
  h: 2,
  i: 3,
  s: 3,
  m: 2,
  y: 1,
  r: 4,
  n: 1,
  g: 1,
  e: 2,
  a: 2,
  o: 1
};

const results = countLetters(input);

assertEqual(results, expected);