// fibonacci

// const fibonacci = (n) => {
//   if (n <= 0) {
//     return "Invalid input. Please provide a positive integer greater than 0.";
//   }
//   const fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
//   return fib.slice(0, n);
// };

// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// factorial

// const factorial = (n) => {
//   let fac = 1;
//   for (let i = 2; i <= n; i++) fac *= i;
//   return fac;
// };

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))

// prime number O(sqrt(n))

// const prime = (n) => {
//   if(n<2)return "give a positive number"
//   for (let i = 2; i <=Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// console.log(prime(5))
// console.log(prime(4))

// power of two  O(logn)

// const powerOf = (n) => {
//   if (n < 1) return false;
//   while (n > 1) {
//     if (n % 2 === 0) return false;
//     n /= 2;
//   }
//   return true;
// };

// console.log(powerOf(1));
// console.log(powerOf(2));
// console.log(powerOf(5));

// recursive fibonacci  O(2^n)

// const fibonacci = (n) => {
//   if (n <2) return n ;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log((fibonacci(0)))
// console.log((fibonacci(1)))
// console.log((fibonacci(6)))

// recursive factorial O(n)

// function recursion(n) {
//   if (n < 2) return 1;
//   return n * recursion(n - 1);
// }

// console.log(recursion(0))
// console.log(recursion(1))
// console.log(recursion(5))
