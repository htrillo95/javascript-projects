let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

console.log(holdCabinet1.concat(holdCabinet2)); //combines both arrays into one array
console.log(holdCabinet1); // prints the single array

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

// Use slice to get a slice of two elements from each array
let sliceFromCabinet1 = holdCabinet1.slice(2, 4); // Elements at index 2 and 3
let sliceFromCabinet2 = holdCabinet2.slice(3, 5); // Elements at index 3 and 4


console.log(sliceFromCabinet1);
console.log(sliceFromCabinet2);

console.log(holdCabinet1); // OG Code uncahnged 
console.log(holdCabinet2); // OG Code unchanged


//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

