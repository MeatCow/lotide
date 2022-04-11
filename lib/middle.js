const middle = (array) => {
  let output = [];

  if (array.length <= 2) {
    return output;
  }

  let centerIndex = array.length / 2;

  if (Number.isInteger(centerIndex)) {
    output.push(array[centerIndex - 1]);
    output.push(array[centerIndex]);
  } else {
    output.push(array[Math.floor(centerIndex)]);
  }

  return output;
};

export {middle};