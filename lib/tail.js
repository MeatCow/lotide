const tail = (array) => {
  if (Array.isArray(array)) {
    return array.slice(1);
  } else {
    return undefined;
  }
};

export {tail};