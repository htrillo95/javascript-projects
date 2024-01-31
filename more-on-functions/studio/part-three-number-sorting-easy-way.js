//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
function findMinValue(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  function sortArrayAscending(arr) {
    let sortedArray = [];
  
    while (arr.length > 0) {
      let min = findMinValue(arr);
      sortedArray.push(min);
      arr.splice(arr.indexOf(min), 1);
    }
  
    return sortedArray;
  }

console.log("Sorted array (ascending):", sortArrayAscending(nums1));
console.log("Sorted array (ascending):", sortArrayAscending(nums2));
console.log("Sorted array (ascending):", sortArrayAscending(nums3))

//Sort each array in decending order.
function sortArrayDescending(arr) {
    let sortedArray = sortArrayAscending(arr);
    return sortedArray.reverse();
  }
  console.log("Sorted array (descending):", sortArrayDescending(nums1));
console.log("Sorted array (descending):", sortArrayDescending(nums2));
console.log("Sorted array (descending):", sortArrayDescending(nums3));/
