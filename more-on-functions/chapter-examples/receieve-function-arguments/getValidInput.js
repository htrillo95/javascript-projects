const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
function startsWithA(input){
  return input.toLowercase().startsWithA
}

// TODO 2: write a validator 
// that ensures input is a vowel
function isVowel(input) {
  return ['a','e','i','o','u'].includes(input.toLowercase());
}

let userInput1 = getValidInput("Enter a string starting with 'a': ", startsWithA);
console.log("Valid input:", userInput1);

// Example usage for isVowel
let userInput2 = getValidInput("Enter a vowel: ", isVowel);
console.log("Valid input:", userInput2);

