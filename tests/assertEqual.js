import { describe } from "mocha";
import { assert } from "chai";
import * as sinon from "sinon";
import { assertEqual } from "../lib/assertEqual.js";

describe("assertEqual", () => {
  it(`should console.log "Passed" message when 2 element are strictly equal`, () => {
    const spy = sinon.spy(console, "log");
    const actual = 1;
    const expected = 1;
    assertEqual(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${actual} === ${expected}`));
    spy.restore();
  });
  it(`should console.log "Failed" message when 2 element are not strictly equal`, () => {
    const spy = sinon.spy(console, "log");
    const actual = 1;
    const expected = 15;
    assertEqual(actual, expected);
    assert(spy.calledWith(`😬😬😬 Assertion Failed: ${actual} !== ${expected}`));
    spy.restore();
  });
});