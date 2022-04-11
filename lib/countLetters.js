const countLetters = (inputString) => {
  const output = {};
  inputString = inputString.toLowerCase().matchAll(/[a-z]/g);

  for (let char of inputString) {
    if (!output[char]) {
      output[char] = 0;
    }
    output[char]++;
  }

  return output;
};

export {countLetters};