const flatten = (array) => {
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

console.log(flatten([[[0, 0.5, 0.7], 1], 2, [3, 4], 5, [6,[7, [8, 9]]]]));