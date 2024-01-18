const input = require('readline-sync');

//Part 2) Accept user input. Query # of letters. Need top define new variable,so...
let numberofLetters = input.question("Enter number of letters that will be relocated: ");

let string = "LaunchCode";

let originalString = string //aded for 1c) template literal part. 

//1) Use string methods to remove the first three characters from the string and add them to the end.

//need new var for "RemovedString" so we define new var
let newString = string.slice(0,3); //removes first 3 characters
string = string.slice(3) + newString; //removes first 3 chars & concatenates both variables
console.log(string); //prints "pig-latin launchcode"

//Hint - define another variable to hold the new string or reassign the new string to str. //DONE ABOVE!

//1c) Use a template literal to print the original and modified string in a descriptive phrase.

//define ORIGINAL STRING at top to be printed bc it would not print initially, so..

console.log(`The original string was: ${originalString}, while the new string printed is: ${string}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//ADDED AT TOP OF EXERCISE -> let numberofLetters = input.question("Enter number of letters that will be relocated: ");

let removedLetters = string.slice(0, numberofLetters); //removes user amount input from string
string = originalString.slice(numberofLetters) + removedLetters; //adds it to the end of string

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

