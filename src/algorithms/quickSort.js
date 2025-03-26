export const quickSort = (arr) => {
    const animations = [];
    const array = arr.slice();
  
    const sort = (arr, low, high) => {
      if (low < high) {
        let pi = partition(arr, low, high);
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
      }
    };
  
    const partition = (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        animations.push({ compare: [j, high] });
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          animations.push({ swap: [i, j], array: arr.slice() });
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      animations.push({ swap: [i + 1, high], array: arr.slice() });
      return i + 1;
    };
  
    sort(array, 0, array.length - 1);
    return animations;
  };