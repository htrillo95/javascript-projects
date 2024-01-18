let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); //nothing changed
console.log(str.split('e')); //e is removed
console.log(str.split(' '));//commas between each string
console.log(str.split(''));//comma after each character


//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join(''));//joins all strings together

console.log(str,arr);//OG Code is unchanged

//3) Do split or join change the original string/array?

// NO

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(',')); //concatenation?