import { eqObjects } from "./eqObjects.js";

const assertObjectsEquals = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

export { assertObjectsEquals };