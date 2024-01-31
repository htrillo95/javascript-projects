//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let myFunction = function (value) {
    if (typeof value === 'number') {
      return value * 3; // Triples the number
    } else if (typeof value === 'string') {
      return 'ARRR!'; // Returns "ARRR!" for string
    }
  };
    console.log(myFunction(15));      // Prints 15
    console.log(myFunction('Hello')); // Prints "ARRR!"


/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let newArr = arr.map(myFunction);

// Printing the new array
console.log(newArr);