import { describe } from "mocha";
import { assert } from "chai";
import { eqArrays } from "../lib/eqArrays.js";

describe("eqArrays", () => {
  it("should return true when 2, 1-depth arrays are equal", () => {
    assert.isTrue(eqArrays(
      [1, 2, 3],
      [1, 2, 3]
    ));
  });
  it("should return false when 2, 1-depth arrays are not equal", () => {
    assert.isFalse(eqArrays(
      [1, 2, 3],
      [3, 2, 1]
    ));
  });
  it("should return true when comparing arrays with string values", () => {
    assert.isTrue(eqArrays(
      ["1", "2", "3"],
      ["1", "2", "3"]
    ));
  });
  it("should return false when comparing a string to a number", () => {
    assert.isFalse(eqArrays(
      ["1", "2", "3"],
      ["1", "2", 3]
    ));
  });
  //Recursive tests below
  it("should return true when comparing equivalent nested arrays", () => {
    assert.isTrue(eqArrays(
      [[2, 3], [4]],
      [[2, 3], [4]]
    ));
  });
  it("should return false when comparing different nested arrays", () => {
    assert.isFalse(eqArrays(
      [[2, 3], [4]],
      [[2, 3], [4, 5]]
    ));
  });
  it("should return false when comparing different nested arrays, even if the elements are the same, but not in an array", () => {
    assert.isFalse(eqArrays(
      [[2, 3], [4]],
      [[2, 3], 4]
    ));
  });
  it("should return true when comparing empty arrays", () => {
    assert.isTrue(eqArrays(
      [],
      []
    ));
  });
});