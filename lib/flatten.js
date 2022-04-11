const flatten = (array, output = []) => {
  
  if (!Array.isArray(array)) {
    output.push(array);
    return;
  }

  for (let element of array) {
    flatten(element, output);
  }
  
  return output;
};

export {flatten};