import { describe } from "mocha";
import { assert } from "chai";
import { head } from "../lib/head.js";

// assertEqual(head([]), undefined);

describe("head", () => {
  it("should return the first element in an array", () => {
    assert.equal(head(
      [5, 6, 7]
    ),5
    );
  });
  it("should return the first element in an array even if element is a string", () => {
    assert.equal(head(
      ["Hello", "Lighthouse", "Labs"]
    ),"Hello"
    );
  });
  it("should return the first element in an array, given an array with a single element", () => {
    assert.equal(head(
      [5]
    ),5
    );
  });
  it("should return undefined when given an empty array", () => {
    assert.isUndefined(head(
      []
    ));
  });
});