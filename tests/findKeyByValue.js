import { describe } from "mocha";
import { assert } from "chai";
import { findKeyByValue } from "../lib/findKeyByValue.js";

const testShows = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  satire: "Brooklyn Nine-Nine"
};

describe("findKeyByValue", () => {
  it("should return undefined if there is no matching value", () => {
    assert.isUndefined(findKeyByValue(
      testShows,
      "Mr. Rogers"
    ));
  });
  it("should return the first key matching the passed value", () => {
    assert.strictEqual(findKeyByValue(
      testShows,
      "The Wire"
    ),"drama"
    );
  });
  it("should return the first key matching the passed value", () => {
    assert.strictEqual(findKeyByValue(
      testShows,
      "The Expanse"
    ),"scifi"
    );
  });
});