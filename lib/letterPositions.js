const letterPositions = function(sentence) {
  const output = {};
  sentence = sentence.toLowerCase().split("");

  for (let [index, char] of sentence.entries()) {
    if (!/[a-z]/g.test(char)) {
      continue;
    }
    if (!output[char]) {
      output[char] = [];
    }
    output[char].push(index);
  }

  return output;
};

export {letterPositions};