import { describe } from "mocha";
import { assert } from "chai";
import { countOnly } from "../lib/countOnly.js";

describe("countOnly", () => {
  it("should return an empty object when given empty inputs", () => {
    assert.deepEqual(countOnly(
      [],
      {}
    ),{}
    );
  });
  it("should only return counts for the items in the filter list, anything else should be undefined", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const filters = {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    };
    const actual = countOnly(firstNames, filters);
    assert.strictEqual(actual["Jason"], 1);
    assert.strictEqual(actual["Fang"], 2);
    assert.isUndefined(actual["Agouhanna"]);
  });
  it("should return an empty object for a fully false object", () => {
    const names = ["Matt", "John"];
    const filters = {"Matt": false, "John": false};
    assert.deepEqual(countOnly(
      names,
      filters
    ), {}
    );
  });
});