// BubbleSort O(n2)
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
// compares adjacent elements, and swaps them if they are in the wrong order. The pass through the 
// list is repeated until the list is sorted
// const BubbleSort = (arr) => {
//   let swap = true;

//   while (swap) {
//     swap = false;
//     for (let i = 0; i < arr.length-1 ; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swap = true;
//       }
//     }
//   }
// };

// const arr = [8, 20, -2, 4, -6];
// BubbleSort(arr);
// console.log(arr);

// insertion sort  O(n2)

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j] = numberToInsert;
//     // for (let j = i; j >= 0; j--) {
//     //   if (numberToInsert < arr[j]) {
//     //     const temp = arr[j];
//     //     console.log(numberToInsert);
//     //     arr[j] = numberToInsert;
//     //     arr[j + 1] = temp;
//     //   } else break;
//     // }
//   }
// }

// const arr = [8, 20, -2, 4, -6, 5, 2, 6, 1];
// insertionSort(arr);
// console.log(arr);

// quickSort  O(n2)  Avg O(nlogn)

// const quickSort = (arr) => {
//   if (arr.length <2) return arr;
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     else right.push(arr[i]);
//   }
//   return [...quickSort(left),pivot, ...quickSort(right)];
// };
// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));

// quicksort without an extra  array:

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivot = partition(arr, left, right);
//     quickSort(arr, left, pivot - 1);
//     quickSort(arr, pivot + 1, right);
//   }
//   return arr;
// }

// const partition = (arr, left, right) => {
//   const pivot = arr[right];
//   let i = left;
//   for (let j = i; j < right; j++) {
//     if (arr[j] < pivot) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//     }
//   }
//   [arr[i], arr[right]] = [arr[right], arr[i]];
//   return i;
// };

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));

// Merge sort  O(nlogn)

// const mergeSort = (arr) => {
//   if (arr.length < 2) return arr;
//   const middleElement = Math.floor(arr.length / 2);

//   const left = arr.slice(0, middleElement);
//   const right = arr.slice(middleElement);

//   return merge(mergeSort(left), mergeSort(right));
// };
// const merge = (left, right) => {
//   const sorted = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) sorted.push(left.shift());
//     else sorted.push(right.shift());
//   }

//   return [...sorted, ...left, ...right];
// };

// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr));
