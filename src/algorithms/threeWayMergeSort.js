export const threeWayMergeSort = (arr) => {
    const animations = [];
    const array = arr.slice();
  
    const merge = (arr, left, mid1, mid2, right) => {
      const temp = [];
      let i = left, j = mid1, k = mid2;
  
      while ((i < mid1) || (j < mid2) || (k < right)) {
        let minVal = Infinity, idx = -1;
  
        if (i < mid1 && arr[i] < minVal) { minVal = arr[i]; idx = i; }
        if (j < mid2 && arr[j] < minVal) { minVal = arr[j]; idx = j; }
        if (k < right && arr[k] < minVal) { minVal = arr[k]; idx = k; }
  
        animations.push({ compare: [idx] });
        temp.push(arr[idx]);
        idx === i ? i++ : idx === j ? j++ : k++;
      }
  
      for (let p = left, q = 0; p < right; p++, q++) {
        arr[p] = temp[q];
        animations.push({ setArray: true, array: arr.slice() });
      }
    };
  
    const sort = (arr, left, right) => {
      if (right - left < 2) return;
  
      const third = Math.floor((right - left) / 3);
      const mid1 = left + third;
      const mid2 = left + 2 * third + 1;
  
      sort(arr, left, mid1);
      sort(arr, mid1, mid2);
      sort(arr, mid2, right);
  
      merge(arr, left, mid1, mid2, right);
    };
  
    sort(array, 0, array.length);
    return animations;
  };