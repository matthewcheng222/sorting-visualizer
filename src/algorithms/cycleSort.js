export const cycleSort = (arr) => {
    const animations = [];
    const array = arr.slice();
    const n = array.length;
  
    for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
      let item = array[cycleStart];
      let pos = cycleStart;
  
      for (let i = cycleStart + 1; i < n; i++) {
        animations.push({ compare: [i, cycleStart] });
        if (array[i] < item) pos++;
      }
  
      if (pos === cycleStart) continue;
  
      while (item === array[pos]) pos++;
      [array[pos], item] = [item, array[pos]];
      animations.push({ swap: [pos, cycleStart], array: array.slice() });
  
      while (pos !== cycleStart) {
        pos = cycleStart;
        for (let i = cycleStart + 1; i < n; i++) {
          animations.push({ compare: [i, cycleStart] });
          if (array[i] < item) pos++;
        }
        while (item === array[pos]) pos++;
        [array[pos], item] = [item, array[pos]];
        animations.push({ swap: [pos, cycleStart], array: array.slice() });
      }
    }
    return animations;
  };