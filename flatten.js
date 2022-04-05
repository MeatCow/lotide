const flatten = (array) => {

  if (!Array.isArray(array)) {
    return array;
  }

  let output = [];

  for (let element of array) {
    if (!Array.isArray(element)) {
      output.push(element);
    } else {
      flatten(element).forEach(innerElement => {
        output.push(innerElement);
      });
    }
  }

  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));