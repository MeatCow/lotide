import { describe } from "mocha";
import { assert } from "chai";
import { head } from "../lib/head.js";

describe("head", () => {
  it("should return the first element in an array", () => {
    assert.strictEqual(head(
      [5, 6, 7]
    ),5
    );
  });
  it("should return the first element in an array even if element is a string", () => {
    assert.strictEqual(head(
      ["Hello", "Lighthouse", "Labs"]
    ),"Hello"
    );
  });
  it("should return the first element in an array, given an array with a single element", () => {
    assert.strictEqual(head(
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