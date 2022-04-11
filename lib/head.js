const head = function(array) {
  if (Array.isArray(array) && array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};

export {head};