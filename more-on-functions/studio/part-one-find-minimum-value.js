//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
function findMinValue(numbers) {
     if (numbers.length === 0) { // Check if the array is empty
      return "Array is empty.";
    }
  
    // Initialize the minimum value with the first element of the array
    let minValue = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {  // Iterate through the array to find the minimum value
      if (numbers[i] < minValue) {
        minValue = numbers[i];
      }
    }

    return minValue;
  }
  
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log("Minimum value:", findMinValue(nums1));
console.log("Minimum value:", findMinValue(nums2));
console.log("Minimum value:", findMinValue(nums3));