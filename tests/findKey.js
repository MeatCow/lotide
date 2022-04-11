import { describe } from "mocha";
import { assert } from "chai";
import { findKey } from "../lib/findKey.js";

const hotels = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("findKey", () => {
  it("should return undefined for a predicate that always returns false", () => {
    assert.isUndefined(findKey(
      hotels,
      x => false
    ));
  });
  it("should return the first element in the object when the predicate evaluates to true", () => {
    assert.strictEqual(findKey(
      hotels,
      x => true
    ), "Blue Hill");
    assert.strictEqual(findKey(
      hotels,
      x => x.stars === 2
    ), "noma");
  });
  it("should return undefined when given an empty object", () => {
    assert.isUndefined(findKey(
      {},
      x => x.stars === 2
    ));
  });
});