import { describe } from "mocha";
import { assert } from "chai";
import * as sinon from "sinon";
import { assertArraysEqual } from "../lib/assertArraysEqual.js";

describe("assertArraysEqual", () => {
  it("should assert that 2 same arrays are equal", () => {
    const spy = sinon.spy(console, "log");
    const actual = [1, 2, 3];
    const expected = [1, 2, 3];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${actual} === ${expected}`));
    spy.restore();
  });
  it("should assert that 2 arrays with the same elements, in a different order, are not equal", () => {
    const spy = sinon.spy(console, "log");
    const actual = [1, 2, 3];
    const expected = [3, 2, 1];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`));
    spy.restore();
  });
  it("should assert correctly for arrays that contain strings", () => {
    const spy = sinon.spy(console, "log");
    const actual = ["1", "2", "3"];
    const expected = ["1", "2", "3"];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${actual} === ${expected}`));
    spy.restore();
  });
  it("should perform type comparison to ensure elements are the correct type", () => {
    const spy = sinon.spy(console, "log");
    const actual = ["1", "2", "3"];
    const expected = ["1", "2", 3];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`));
    spy.restore();
  });
  it("should return true for empty arrays", () => {
    const spy = sinon.spy(console, "log");
    const actual = [];
    const expected = [];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${actual} === ${expected}`));
    spy.restore();
  });
});