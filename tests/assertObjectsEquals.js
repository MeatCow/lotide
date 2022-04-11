import { describe } from "mocha";
import { assert } from "chai";
import * as sinon from "sinon";
import { inspect } from "util";
import { assertObjectsEquals } from "../lib/assertObjectsEquals.js";

describe("assertObjectsEquals", () => {
  it(`should console.log "Passed" message when 2 element are strictly equal`, () => {
    const spy = sinon.spy(console, "log");
    const actual = { a: "1", b: "2" };
    const expected = { a: "1", b: "2" };
    assertObjectsEquals(actual, expected);
    assert(spy.calledWith(`👌👌👌 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
    spy.restore();
  });
  it(`should console.log "Failed" message when 2 element are not strictly equal`, () => {
    const spy = sinon.spy(console, "log");
    const actual = { a: "1", b: "2" };
    const expected = { b: "1", a: "2" };
    assertObjectsEquals(actual, expected);
    assert(spy.calledWith(`😬😬😬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
    spy.restore();
  });
});