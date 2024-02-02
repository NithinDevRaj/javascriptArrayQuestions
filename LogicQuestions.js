// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data

// const isItArray = (obj) => {
// return Array.isArray(obj);
// };

// console.log(isItArray([1, 2, 3])); // true
// console.log(isItArray("Hello World")); // false

// const isItArray2 =(obj)=>{
//   if(toString.call(obj) ==='[object Array]')return true
//   return false
// }
// console.log(isItArray2([1, 2, 3])); // true
// console.log(isItArray2("Hello World")); // false

// Write a JavaScript function to clone an array

// const cloneArray = (arr) => {
//   return [...arr];
//   return arr.slice(0);
// };
// let originalArr = [1, 2, 3, "Hello", "World"];

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

// const requiredArray = (arr, n) => {
//   if (arr == null) return void 0;
//   if (n === undefined) return arr[0];
//   if (n < 0) return [];
//   return arr.slice(0, n);
// };
// console.log(requiredArray([7, 9, 0, -2]));
// console.log(requiredArray([], 3));
// console.log(requiredArray([7, 9, 0, -2], 3));
// console.log(requiredArray([7, 9, 0, -2], 6));
// console.log(requiredArray([7, 9, 0, -2], -3));

// Write a simple JavaScript program to join all elements of the following array into a string.
const myArray = ["I", "love", "coding"];

// let concat = (arr) => {
//   const hoi = arr.reduce((sum, index) => (sum += index), " ");
//   return hoi;
// };
let concat =(arr)=>{
  return arr.join(' ');
}

console.log(concat(myArray));
