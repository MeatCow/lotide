const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const [index, value] of Object.entries(object)) {
    if (callback(value)) {
      return index;
    }
  }
  return undefined;
};

const hotels = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result = findKey(hotels, x => x.stars === 2);
const result2 = findKey(hotels, x => x.stars === 5);
const result3 = findKey(hotels, x => true);

assertEqual(result, "noma");
assertEqual(result2, undefined);
assertEqual(result3, "Blue Hill");