import { describe } from "mocha";
import { assert } from "chai";
import { letterPositions } from "../lib/letterPositions.js";

// const outputObject = letterPositions(inputString);

// console.log(expected, outputObject);

// assertObjectArraysEqual(expected, outputObject);

describe("letterPositions", () => {
  it("should return an empty object for an empty input", () => {
    assert.isEmpty(letterPositions(""));
  });
  it("should return an object of arrays for string input", () => {
    const inputString = "lighthouse in the house";
    const expected = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(letterPositions(
      inputString
    ),expected
    );
  });
  it("should not add punctuation into the output object, but placement should still be correctly calculated", () => {
    const inputString = `lighthouse ++=in the ,./house"'.,,,/`;
    const expected = {
      l: [0],
      i: [1, 14],
      g: [2],
      h: [3, 5, 18, 24],
      t: [4, 17],
      o: [6, 25],
      u: [7, 26],
      s: [8, 27],
      e: [9, 19, 28],
      n: [15]
    };
    assert.deepEqual(letterPositions(inputString), expected);
  });
});