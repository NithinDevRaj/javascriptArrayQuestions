// Linear Search  O(n)

// const LinearSearch = (arr, t) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === t) return i;
//   }
//   return -1;
// };

// console.log(LinearSearch([-5, 2, 10, 4, 6], 10));
// console.log(LinearSearch([-5, 2, 10, 4, 6], 6));
// console.log(LinearSearch([-5, 2, 10, 4, 6], 20));

// /* Binary Search */ onlyWork on a sorted array

// const BinarySearch = (arr, t) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let middleElement = Math.floor((start + end) / 2);
//     if (arr[middleElement] === t) return middleElement;
//     if (t > middleElement) start = middleElement + 1;
//     else end = middleElement - 1;
//   }
//   return -1;
// };
// console.log(BinarySearch([-5, 2, 4, 6, 10], 10));
// console.log(BinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(BinarySearch([-5, 2, 4, 6, 10], 20));

// recursive binary search O(logn)

// const rescursiveBinarySearch = (arr, t) => {
//   let start = 0;
//   let end = arr.length - 1;
//   return middleElement(start, end, t, arr);
// };

// const middleElement = (start, end, t, arr) => {
//   if (start > end) return -1;
//   let middle = Math.floor((start + end) / 2);
//   if (arr[middle] === t) return middle;
//   if (arr[middle] < t) return middleElement(middle + 1, end, t, arr);
//   else return middleElement(start, middle - 1, t, arr);
// };

// console.log(rescursiveBinarySearch([-5, 2, 4, 6, 10], 10));
// console.log(rescursiveBinarySearch([-5, 2, 4, 6, 10], 2));
