import { describe } from "mocha";
import { assert } from "chai";
import { middle } from "../lib/middle.js";

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);

describe("middle", () => {
  it("should return an empty array when given an array with 1 element", () => {
    assert.deepEqual(middle(
      [1]
    ),[]
    );
  });
  it("should return an empty array when given an array with 2 elements", () => {
    assert.deepEqual(middle(
      [1, 2]
    ),[]
    );
  });
  it("should return the middle element, in a new array, from an array with an odd number", () => {
    assert.deepEqual(middle(
      [1, 2, 3]
    ),[2]
    );
  });
  it("should return the middle element, in a new array, from an array with an odd number of elements > 3 elements", () => {
    assert.deepEqual(middle(
      [1, 2, 3, 4, 5]
    ),[3]
    );
  });
  it("should return the 2 middle elements, in a new array, from an array with an even number of elements", () => {
    assert.deepEqual(middle(
      [1, 2, 3, 4]
    ),[2, 3]
    );
  });
  it("should return the 2 middle elements, in a new array, from an array with an even number of elements > 4 elements", () => {
    assert.deepEqual(middle(
      [1, 2, 3, 4, 5, 6]
    ),[3, 4]
    );
  });
});