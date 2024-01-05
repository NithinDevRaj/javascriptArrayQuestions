// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data

// const isArray = (array) => {
//   // The expression toString.call(array) === "[object Array]" is a way to determine the type of an object in JavaScript
//   console.log(toString.call(array));
//   if (toString.call(array) === "[object Array]") return true;
//   return false;
// };

// console.log(isArray("we3school"));
// console.log(isArray([1, 2, 34]));
// console.log(isArray({ 1: "nithin" }));

// Write a JavaScript function to clone an array.

// const array_clone = (arr) => {
//   // const clone = [...arr]
//   //   return clone
//   return arr.slice(0);
// };

// console.log(array_clone([1, 2, 4, 0]));
// console.log(array_clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// const first = (arr,n) => {
//   // console.log(n)
//   if(n===undefined)return arr[0]

//   if(n>0)return arr.slice(0,n)

//   return []
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));