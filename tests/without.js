import { describe } from "mocha";
import { assert } from "chai";
import { without } from "../lib/without.js";

describe("without", () => {
  it("should return an empty array when given input is empty", () => {
    assert.isEmpty(without([],[]));
    assert.isEmpty(without([],[1,2,3]));
  });
  it("should return an array that removes the elements in the 2nd parameter", () => {
    assert.deepEqual(without([1,2,3],[2]), [1,3]);
    assert.deepEqual(without([1,2,3],[]), [1,2,3]);
  });
  it("should not modify the original array", () => {
    let original = ["Hello", "World"];
    let output = without(original,["World"]);
    assert.deepEqual(original, ["Hello", "World"]);
    assert.deepEqual(output, ["Hello"]);
  });
});