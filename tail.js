const assertEqual = function(actual, expected) {
  const passedMessage = `👌👌👌 Assertion Passed: ${actual} === ${expected}`;
  const failedMessage = `😬😬😬 Assertion Failed: ${actual} !== ${expected}`;

  if (Array.isArray(actual)) {
    if (actual.length === expected.length &&
      actual.every((value, index) => value === expected[index])) {
      console.log(passedMessage);
      return;
    }
  }
  if (actual === expected) {
    console.log(passedMessage);
  } else {
    console.log(failedMessage);
  }
};

const tail = (array) => {
  if (Array.isArray(array)) {
    return array.slice(1);
  } else {
    return undefined;
  }
};

assertEqual(tail([1, 2, 3]), [2, 3]);
assertEqual(tail([1, 3]), [3]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWords = tail(words);
assertEqual(words.length, 3);
assertEqual(newWords, ["Lighthouse", "Labs"]);
assertEqual();