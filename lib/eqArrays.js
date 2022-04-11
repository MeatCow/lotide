const eqArrays = function(actual, expected) {
  if (!Array.isArray(actual) ||
      !Array.isArray(expected) ||
      actual.length !== expected.length) {
    return false;
  }
  return actual.every((value, index) => {
    if (!Array.isArray(value)) {
      return value === expected[index];
    } else {
      return eqArrays(value, expected[index]);
    }
  });
};

export {eqArrays};