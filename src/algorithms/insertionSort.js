export const insertionSort = (arr) => {
    const animations = [];
    const array = arr.slice();
    const n = array.length;
  
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        animations.push({ compare: [j, j + 1] });
        array[j + 1] = array[j];
        animations.push({ swap: [j, j + 1], array: array.slice() });
        j--;
      }
      array[j + 1] = key;
      animations.push({ setArray: true, array: array.slice() });
    }
    return animations;
  };