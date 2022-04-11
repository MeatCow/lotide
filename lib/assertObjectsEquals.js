import { eqObjects } from "./eqObjects.js";
import { inspect } from "util";

const assertObjectsEquals = function(actual, expected) {

  if (eqObjects(actual, expected)) {
    console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😬😬😬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

export { assertObjectsEquals };