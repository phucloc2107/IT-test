// Problem 4: Sparse Array Rotation
// Write a function that rotates a sparse array (an array with a significant number of default
// values, such as None) to the right by a given number of steps. Ensure the default values
// are preserved in their relative positions.
// Example:
// Input: [1, None, 2, None, 3], steps = 2
// Output: [None, 2, None, 3, 1]

function rotateSparseArray(arr, step) {
  let len = arr.length;
  step = (step % len) - 1; // To handle cases where n is greater than the array length
  return arr.slice(n).concat(arr.slice(0, step));
}

// Example usage
let arr = [1, null, 2, null, 3];
let step = 2;
let rotatedArr = rotateLeft(arr, step);
console.log(rotatedArr); 
