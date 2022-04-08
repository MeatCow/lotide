const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    } else if (typeof value === "object" && value !== null) {
      if (!eqObjects(value, object2[key])) {
        return false;
      }
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

//Recursive test cases
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);