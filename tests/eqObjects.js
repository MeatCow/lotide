import { describe } from "mocha";
import { assert } from "chai";
import { eqObjects } from "../lib/eqObjects.js";

describe("eqObjects", () => {
  it("should return true for 2 empty objects", () => {
    assert.isTrue(eqObjects(
      {},
      {}
    ));
  });
  it("should return true for 2 deeply equal objects", () => {
    assert.isTrue(eqObjects(
      { a: "1", b: "2" },
      { a: "1", b: "2" }
    ));
    assert.isTrue(eqObjects(
      { c: "1", d: ["2", 3] },
      { d: ["2", 3], c: "1" }
    ));
    assert.isFalse(eqObjects(
      { c: "1", d: ["2", 3, 4] },
      { c: "1", d: ["2", 3] }
    ));
  });
  it("should return true for 2 objects even if the keys are out of order", () => {
    assert.isTrue(eqObjects(
      { a: "1", b: "2" },
      { b: "2", a: "1" }
    ));
  });
  it("should return false for 2 different objects", () => {
    assert.isFalse(eqObjects(
      { a: "1", b: "1" },
      { a: "1", b: "2" }
    ));
    assert.isFalse(eqObjects(
      { a: "1", b: "2" },
      { a: "1", b: "2", c: "3" }
    ));
  });
  it("should return correctly for nested objects, as well as nested strings", () => {
    assert.isTrue(eqObjects(
      { a: { z: 1 }, b: 2 },
      { a: { z: 1 }, b: 2 }
    ));
    assert.isFalse(eqObjects(
      { a: { y: 0, sheep: "bahhhh" }, b: 2 },
      { a: {y: 0, cow: "mooo"}, b: 2 }
    ));
  });
});