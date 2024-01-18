//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

element1 = ['hydrogen', 'H', 1.008]
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]); // Prints entire element2 [helium,He,4.003]
console.log(table[1][1]); // Print 'He'

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(table[0][2]); // Output: Mass Element1 = 1.008
console.log(table[1][0]); // Output: Name Element 2 = Helium
console.log(table[2][1]); // Output: Symbol Elemnt 26 = 'Fe'

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

// Creating a 3-dimensional array for sports equipment
const sportsArray = [
    [ ['soccer ball', 'tennis ball'], ['basketball', 'football'] ],
    [ ['tennis racket', 'baseball bat'], ['goalposts', 'net'] ],
    [ ['gloves', 'helmet'], ['water bottle', 'headband'] ]
  ];
  
  // Print out one entry from each level
  console.log("Level 1:", sportsArray[0]); // Output: [['soccer ball', 'tennis ball'], ['basketball', 'football']]
  console.log("Level 2:", sportsArray[1][0]); // Output: ['tennis racket', 'baseball bat']
  console.log("Level 3:", sportsArray[2][1][0]); // Output: 'water bottle'
  