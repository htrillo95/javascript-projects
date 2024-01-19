const input = require('readline-sync');

let string = "LaunchCode";
let originalString = string //aded for 1c) template literal part. 

//1) Use string methods to remove the first three characters from the string and add them to the end.

let newString = string.slice(0,3); //removes first 3 characters
string = string.slice(3) + newString; //removes first 3 chars & concatenates both variables
console.log(string); //prints "pig-latin launchcode"

console.log(`The original string: ${originalString}, New string: ${string}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numberofLetters = input.question("Enter number of letters that will be relocated: ");
let errorMessage = "Number of letters exceeds word length. Move 3 characters.";

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numberofLetters > originalString.length) {
    console.log(errorMessage);
    numberofLetters = 3; // Default to moving 3 characters
  }
  
  let removedLetters = string.slice(0, numberofLetters); // removes user amount input from string
  string = originalString.slice(numberofLetters) + removedLetters; // adds it to the end of string
  