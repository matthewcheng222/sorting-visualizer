import { bubbleSort } from "./bubbleSort";
import { quickSort } from "./quickSort";
import { mergeSort } from "./mergeSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { heapSort } from "./heapSort";
import { cycleSort } from "./cycleSort";
import { threeWayMergeSort } from "./threeWayMergeSort";

const algorithmDetails = {
  "Bubble Sort": {
    sort: bubbleSort,
    steps: [
      "Start at the beginning of the array.",
      "Compare the current element with the next one.",
      "If they are out of order, swap them.",
      "Move to the next pair and repeat until the end.",
      "After each pass, the largest unsorted element 'bubbles' to the end.",
      "Repeat until no more swaps are needed."
    ],
    complexity: { time: "O(n²)", space: "O(1)" }
  },

  "Quick Sort": {
    sort: quickSort,
    steps: [
      "Choose a pivot element from the array.",
      "Partition the array into two halves: elements less than the pivot and elements greater than the pivot.",
      "Recursively apply Quick Sort to the left and right subarrays.",
      "Combine the results into a single sorted array."
    ],
    complexity: { time: "O(n log n)", space: "O(log n)" }
  },

  "Merge Sort": {
    sort: mergeSort,
    steps: [
      "Divide the array into two halves.",
      "Recursively sort each half.",
      "Merge the two sorted halves into one sorted array.",
      "Repeat the merge process up the recursion stack until the full array is merged."
    ],
    complexity: { time: "O(n log n)", space: "O(n)" }
  },

  "Selection Sort": {
    sort: selectionSort,
    steps: [
      "Start at the beginning of the array.",
      "Find the smallest element in the unsorted portion.",
      "Swap it with the first unsorted element.",
      "Move the boundary of the sorted portion one step forward.",
      "Repeat until the entire array is sorted."
    ],
    complexity: { time: "O(n²)", space: "O(1)" }
  },

  "Insertion Sort": {
    sort: insertionSort,
    steps: [
      "Start with the second element, treating the first as a sorted subarray.",
      "Compare the current element with elements in the sorted subarray.",
      "Shift larger elements to the right.",
      "Insert the current element into its correct position.",
      "Repeat for all elements."
    ],
    complexity: { time: "O(n²)", space: "O(1)" }
  },

  "Heap Sort": {
    sort: heapSort,
    steps: [
      "Build a max-heap from the input array.",
      "Swap the root (largest element) with the last element.",
      "Reduce the heap size and heapify the root again.",
      "Repeat until the heap size is 1."
    ],
    complexity: { time: "O(n log n)", space: "O(1)" }
  },

  "Cycle Sort": {
    sort: cycleSort,
    steps: [
      "Start from the first element.",
      "Count how many elements are smaller to determine the correct position.",
      "Place the element in its correct position, forming a cycle.",
      "Repeat this process until the entire array is sorted with minimal writes."
    ],
    complexity: { time: "O(n²)", space: "O(1)" }
  },

  "3-way Merge Sort": {
    sort: threeWayMergeSort,
    steps: [
      "Divide the array into three equal parts.",
      "Recursively apply 3-way merge sort on each part.",
      "Merge the three sorted subarrays into a single sorted array.",
      "Repeat until the entire array is sorted."
    ],
    complexity: { time: "O(n log n)", space: "O(n)" }
  }
};

export default algorithmDetails;