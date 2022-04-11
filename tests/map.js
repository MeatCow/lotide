import { describe } from "mocha";
import { assert } from "chai";
import { map } from "../lib/map.js";

describe("map", () => {
  it("should return an empty array for input of []", () =>{
    assert.isEmpty(map([], x => true));
  });
  it("should not modify the original array", () => {
    let actual = [1, 2, 3, 4];
    map(actual, x => x * 2);
    assert.deepEqual(actual, [1, 2, 3, 4]);
  });
  it("should map the new array according to the predicate", () => {
    let actual = [1, 2, 3, 4];
    let newArray = map(actual, x => x * 2);
    assert.deepEqual(newArray, [2, 4, 6, 8]);
  });
});