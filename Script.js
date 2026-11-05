// ============================================
// JavaScript Functions Exercise
// ============================================

// ---------- String Manipulation ----------

// Reverse a string
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Count the number of characters in a string
function countCharacters(str) {
  let count = 0;
  for (const _ of str) {
    count++;
  }
  return count;
}

// Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) =>
      word.length > 0 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word
    )
    .join(" ");
}

// ---------- Array Functions ----------

// Find the maximum value in an array of numbers
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Find the minimum value in an array of numbers
function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Sum of all elements in an array
function sumArray(arr) {
  let sum = 0;
  for (const n of arr) {
    sum += n;
  }
  return sum;
}

// Filter an array: keep elements for which the condition returns true
function filterArray(arr, condition) {
  const result = [];
  for (const item of arr) {
    if (condition(item)) result.push(item);
  }
  return result;
}

// ---------- Mathematical Functions ----------

// Factorial of a non-negative integer
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Check whether a number is prime
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Generate the Fibonacci sequence with a given number of terms
function fibonacci(terms) {
  const seq = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < terms; i++) {
    seq.push(a);
    [a, b] = [b, a + b];
  }
  return seq;
}

// ============================================
// Tests
// ============================================
console.log("--- Strings ---");
console.log(reverseString("hello"));                       // "olleh"
console.log(countCharacters("JavaScript"));                // 10
console.log(capitalizeWords("hello brave new world"));     // "Hello Brave New World"

console.log("--- Arrays ---");
const nums = [4, 9, -2, 15, 7];
console.log(findMax(nums));                                // 15
console.log(findMin(nums));                                // -2
console.log(sumArray(nums));                               // 33
console.log(filterArray(nums, (n) => n % 2 === 0));        // [ 4, -2 ]
console.log(filterArray(nums, (n) => n > 5));              // [ 9, 15, 7 ]

console.log("--- Math ---");
console.log(factorial(5));                                 // 120
console.log(factorial(0));                                 // 1
console.log(isPrime(17));                                  // true
console.log(isPrime(21));                                  // false
console.log(fibonacci(10));                                // [0,1,1,2,3,5,8,13,21,34]
