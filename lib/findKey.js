const findKey = function(object, callback) {
  for (const [index, value] of Object.entries(object)) {
    if (callback(value)) {
      return index;
    }
  }
  return undefined;
};

export {findKey};