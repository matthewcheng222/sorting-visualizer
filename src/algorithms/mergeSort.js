export const mergeSort = (arr) => {
    const animations = [];
    const array = arr.slice();
  
    const merge = (arr, left, mid, right) => {
      let n1 = mid - left + 1;
      let n2 = right - mid;
  
      let L = arr.slice(left, mid + 1);
      let R = arr.slice(mid + 1, right + 1);
  
      let i = 0, j = 0, k = left;
  
      while (i < n1 && j < n2) {
        animations.push({ compare: [left + i, mid + 1 + j] });
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
        animations.push({ setArray: true, array: arr.slice() });
      }
  
      while (i < n1) {
        arr[k++] = L[i++];
        animations.push({ setArray: true, array: arr.slice() });
      }
  
      while (j < n2) {
        arr[k++] = R[j++];
        animations.push({ setArray: true, array: arr.slice() });
      }
    };
  
    const mergeSortHelper = (arr, l, r) => {
      if (l >= r) return;
      let m = Math.floor((l + r) / 2);
      mergeSortHelper(arr, l, m);
      mergeSortHelper(arr, m + 1, r);
      merge(arr, l, m, r);
    };
  
    mergeSortHelper(array, 0, array.length - 1);
    return animations;
  };