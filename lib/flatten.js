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

console.log(flatten([[[0, 0.5, 0.7], 1], 2, [3, 4], 5, [6,[7, [8, 9]]]]));