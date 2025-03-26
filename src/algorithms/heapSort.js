export const heapSort = (arr) => {
    const animations = [];
    const array = arr.slice();
    const n = array.length;
  
    const heapify = (arr, n, i) => {
      let largest = i;
      let l = 2 * i + 1;
      let r = 2 * i + 2;
  
      if (l < n) {
        animations.push({ compare: [l, largest] });
        if (arr[l] > arr[largest]) largest = l;
      }
      if (r < n) {
        animations.push({ compare: [r, largest] });
        if (arr[r] > arr[largest]) largest = r;
      }
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        animations.push({ swap: [i, largest], array: arr.slice() });
        heapify(arr, n, largest);
      }
    };
  
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) heapify(array, n, i);
    for (let i = n - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      animations.push({ swap: [0, i], array: array.slice() });
      heapify(array, i, 0);
    }
  
    return animations;
  };