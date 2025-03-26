export const selectionSort = (arr) => {
    const animations = [];
    const array = arr.slice();
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        animations.push({ compare: [minIdx, j] });
        if (array[j] < array[minIdx]) minIdx = j;
      }
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      animations.push({ swap: [i, minIdx], array: array.slice() });
    }
    return animations;
  };