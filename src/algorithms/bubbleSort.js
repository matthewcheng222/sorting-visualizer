export const bubbleSort = (arr) => {
    const animations = [];
    const array = arr.slice();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        animations.push({ compare: [j, j + 1] });
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          animations.push({ swap: [j, j + 1], array: array.slice() });
        }
      }
    }
    return animations;
  };