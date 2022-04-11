import { describe } from "mocha";
import { assert } from "chai";
import * as sinon from "sinon";
import { assertArraysEqual } from "../lib/assertArraysEqual.js";

describe("assertArraysEqual", () => {
  it("should console.log passed message when 2 arrays are the same", () => {
    const spy = sinon.spy(console, "log");
    const actual = [1, 2, 3];
    const expected = [1, 2, 3];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${actual} === ${expected}`));
    spy.restore();
  });
  it("should console.log failed message when 2 arrays are not the same", () => {
    const spy = sinon.spy(console, "log");
    const actual = [1, 2, 3];
    const expected = [3, 2, 1];
    assertArraysEqual(actual, expected);
    assert(spy.calledWith(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`));
    spy.restore();
  });
});