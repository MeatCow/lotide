import { describe } from "mocha";
import { assert } from "chai";
import { countLetters } from "../lib/countLetters.js";

// const input = "This is my string, hear me roar!";
// const expected = {
//   t: 2,
//   h: 2,
//   i: 3,
//   s: 3,
//   m: 2,
//   y: 1,
//   r: 4,
//   n: 1,
//   g: 1,
//   e: 2,
//   a: 2,
//   o: 1
// };

// const results = countLetters(input);

// assertEqual(results, expected);

describe("countLetters", () => {
  it("should return an empty object for an empty string", () => {
    assert.deepEqual(countLetters(
      ""
    ),{}
    );
  });
  it(`should count a single letter "a" in a string containing only "a"`, () => {
    assert.deepEqual(countLetters(
      "a"
    ), {a: 1}
    );
  });
  it("should count all the letters in a string, including capital letters", () => {
    const input = "This is my string, hear me ROAR!";
    const expected = {
      t: 2,
      h: 2,
      i: 3,
      s: 3,
      m: 2,
      y: 1,
      r: 4,
      n: 1,
      g: 1,
      e: 2,
      a: 2,
      o: 1
    };
    assert.deepEqual(countLetters(input), expected);
  });
  it("should only count letters, and no other character", () => {
    assert.deepEqual(countLetters(
      ",./351=-+~"
    ), {}
    );
  });
});