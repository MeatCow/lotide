const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 0;
      }
      results[item]++;
    }
  }

  return results;
};

export {countOnly};