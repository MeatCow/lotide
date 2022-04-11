import { describe } from "mocha";
import { assert } from "chai";
import { takeUntil } from "../lib/takeUntil.js";

describe("takeUntil", () => {
  it("should return an empty array when input []", () => {
    assert.deepEqual(takeUntil([]), []);
  });
  it("should return an empty array if predicate evaluates to true on first element", () => {
    assert.deepEqual(takeUntil(
      [1, 2, 3], () => true)
    , []
    );
  });
  it("should return all elements if predicate always returns false", () => {
    assert.deepEqual(takeUntil(
      [1, 2, 3], () => false)
    , [1, 2, 3]
    );
  });
  it("should not include element that caused the predicate to evaluate to false", () => {
    assert.deepEqual(takeUntil(
      [1, 2, 3], x => x === 3)
    , [1, 2]
    );
  });
});