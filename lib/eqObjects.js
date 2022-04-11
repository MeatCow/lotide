import { eqArrays } from "./eqArrays.js";

const eqObjects = function(object1, object2) {
  if (object1 === object2) {
    console.log(object1, "is the same as", object2);
    return true;
  }

  if (typeof object1 !== typeof object2) {
    return false;
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const [key, value] of Object.entries(object1)) {
    if (Array.isArray(value)) {
      if (!eqArrays(value, object2[key])) {
        return false;
      }
    } else if (!eqObjects(value, object2[key])) {
      return false;
    }
  }

  return true;
};

export {eqObjects};