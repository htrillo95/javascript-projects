//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

let initials= language.charAt(0).toUpperCase() + language.charAt(4).toUpperCase()
//unsure about syntax ASK FOR HELP (METHOD CHAINING??)
console.log(initials);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let firstInitial = language[0];
let secondInitial = language[4];
console.log(`The abbreviation for 'JavaScript' is ${firstInitial}${secondInitial}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let myNewString = " newJavaScriptString ";
// ASK FOR HELP WITH SYNTAX?? COMBINING 3 METHODS
//console.log(`${myNewString}.slice(0,4) ${myNewString}.toLowerCase() ${myNewString}.trim()`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
if (String(notTitleCase).includes('title case')){
    console.log("Title Case");
}   