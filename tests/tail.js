import { describe } from "mocha";
import { assert } from "chai";
import { tail } from "../lib/tail.js";

describe("tail", () => {
  it("should return every element except the first in an array", () => {
    assert.deepEqual(tail(
      [1,2,3]
    ),[2,3]);
  });
  it("should return an array with a length of 1 when only 1 element is left", () => {
    assert.deepEqual(tail(
      [1,3]
    ),[3]);
  });
  it("should work with strings as elements", () => {
    assert.deepEqual(tail(
      ["Hello", "Lighthouse", "Labs"],
    ), ["Lighthouse", "Labs"]);
  });
  it("should not modify the original array", () => {
    const expected = ["Yo Yo", "Lighthouse", "Labs"];
    tail(expected);
    assert.equal(expected.length, 3);
  });
  it("should return an empty array when passed an array containing 1 element", () => {
    assert.deepEqual(tail(
      [3]
    ),[]);
  });
  it("should return an empty array when passed an empty array", () => {
    assert.deepEqual(tail(
      []
    ),[]);
  });
});