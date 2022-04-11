const takeUntil = function(array, callback) {
  const output = [];
  
  for (const item of array) {
    if (callback(item)) {
      return output;
    }
    output.push(item);
  }

  return output;
};

export {takeUntil};