const findKeyByValue = (object, inputValue) => {
  for (const [index, value] of Object.entries(object)) {
    if (value === inputValue) {
      return index;
    }
  }
  return undefined;
};

export {findKeyByValue};