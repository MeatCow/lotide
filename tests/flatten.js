import { describe } from "mocha";
import { assert } from "chai";
import { flatten } from "../lib/flatten.js";

describe("flatten", () => {
  it("should return an empty array for an empty array input", () => {
    assert.deepEqual(flatten(
      []
    ),[]
    );
  });
  it("should return [1] for an input of [1]", () => {
    assert.deepEqual(flatten(
      [1]
    ),[1]
    );
  });
  it("should return [1, 2] for an input with a depth of 2", () => {
    assert.deepEqual(flatten(
      [1, [2]]
    ),[1, 2]
    );
  });
  it("should flatten arrays no matter the depth", () => {
    assert.deepEqual(flatten(
      [[[0, 0.5, 0.7], 1], 2, [3, 4], 5, [6,[7, [8, 9]]]]
    ),[0, 0.5, 0.7, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
  });
  it("should should not modify the original array", () => {
    const actual = [1, [2, 3]];
    flatten(actual);
    assert.deepEqual(
      actual,
      [1, [2, 3]]
    );
  });
});