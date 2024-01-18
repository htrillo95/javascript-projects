let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String("1001")); //type conversion//
console.log(typeof("1001"));  //prints as string//
console.log("The length of 1001 is " + String(num).length + ".");

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let newNum = 123.45
console.log((newNum)[newNum.length]); //declare new variable
console.log(String(newNum).length); //type convert again
//console.log((newNum) + " has 5 digits " + "but its length is " + String(newNum).length); //prints with decimal
//console.log((newNum.replace)('.','') + " has 5 digits " + "but its length is " + String(newNum).length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(newNum).includes('.')){
    console.log(String(newNum).length-1); //removes deicaml i believe?
    } else {
    console.log(String(newNum).length); //prints the length is 5
    } //solution given in book, used my own variable. 