let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//For a given string, use the includes method to check to see if the words are separated by commas (,), semicolons (;), or just spaces.
//function checkSeparator(strings) {
	if(strings.includes(',')) {
		return 'Separated by comma';
	} else if(strings.includes(';')) {
	return 'Separated by semicolon';
	} else if(strings.includes(' ')) {
	return ' Separated  by space';
	} else {
	return 'No separtion';
	}
	//console.log(strings); TRYING TO TEST THE ABOVE FUNCTION. ASK HELP
//}

//2) 
function reverseCommas() {
	if (strings.includes(',')) {
		let wordsArray = strings.split(','); //takes worded array & split into new array
		let reversedArray = wordsArray.reverse();//reverses the entries
		let reversedString = reversedArray.join(',');//joins new comma-separated string into array
		if (strings.includes(',')) {
		return reversedString; //returns reversed array
	}	else {
		return strings;//if string doesn't use commas, return orginial string
	}

	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	//TODO: 2. write the code required for this step

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
} }

//3)
function semiDash(inputString) {
	let check;
	let output;
//TODO: write the code required for this step

if (inputString.includes(';')){ //CHECKS FOR SEMICOLONS
	let wordsArray = inputString.split(';') //SPLITS STRING INTO ARRAY USING SEMICOLON
	
	output= wordsArray.join(';'); //JOINS ARRAY INTO NEW HYPHEN-SEPARATED STRING
	check = 'Separated by semicolon';
	
} else { //IF STRING DOESNT USE SEMICOLON, RETURN ORIGINAL STRING
	output = inputString;
	check = 'No separtion';
}
  console.log(check); //LOG RESULT TO CONSOLE...WILL NOT PRINT THO!!! ASK HELP
  console.log(output);
	return output;
}

//4)
function reverseSpaces(inputString) {
	let check;
	let output;
  //TODO: write the code required for this step

if (inputString.includes(' ')) { //CHECKS IF INPUTSTRING INCLUDES SPACES
	let wordsArray = inputString.split(' '); //SPLITS STRING IINTO ARRAY USING SPACE
	let reversedArray = wordsArray.sort().reverse(); //REVERSE & ALPHABETIZE ARRAY
	output = reversedArray.join(' '); //JOINS ARRAY INTO NEW SPACE SEPARATED STRING
	check = 'Separated by space';
} else { //IF STRING DOESNT USE SPACES, RETURN OG STRING
	output = inputString;
	check = 'No separation';
}
	console.log(check); //LOG RESULTS IN CONSOLE.. WILL NOT PRINT!!! ASK HELP
	check = (output);

	return output;
}

//5)
function commaSpace(inputString) {
	let check;
	let output;
	//TODO: write the code required for this step
  if (inputString.includes(', ')) { //CHECK IF INPUTSTRING INCLUDES COMMA SPACES
	let wordsArray = inputString.split(', '); //SPLITS STRING INTO AN ARRAY USING COMMA SPACE
	let reversedArray = wordsArray = wordsArray.reverse();//REVERSES ARRAY

	output = reversedArray.join(', ');//JOINS ARRAT INTO NEW COMMA-SPACE SEPARATED STRING
	check = 'Separated by comma space';
} 	else {
	output = inputString; //IF STRING DOESNT USE COMMA-SPACE, RETURN OG STRING
	check = 'No separation';
}
	console.log(check); //LOGS RESULT TO CONSOLE..WONT PRINT!! ASK HELP!!
	console.log(output);

	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
