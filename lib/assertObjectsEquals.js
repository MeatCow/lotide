const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) ||
      !Array.isArray(expected) ||
      actual.length !== expected.length) {
    return false;
  }
  return actual.every((value, index) => value === expected[index]);
};

const eqObjects = function(object1, object2) {
  if (object1 === object2) {
    return true;
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const [key, value] of Object.entries(object1)) {
    if (Array.isArray(value)) {
      if (!eqArrays(value, object2[key])) {
        return false;
      }
    } else if (value !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(abc, {a: "1", b: "2", c: "3" });

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd2, { c: "1", d: ["2", 3, 4] });