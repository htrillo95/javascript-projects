const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = "water bottles,meal packs,snacks,chocolate".split(',').sort();
let cabinet2 = "space suits,jet packs,tool belts,thermal detonators".split(',').sort();
let cabinet3 = "parrots,cats,moose,alien eggs".split(',').sort();
let cabinet4 = "blankets,pillows,eyepatches,alarm clocks".split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log("Cargo Hold Structure:");
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = input.questionInt("Select a cabinet (0-3):"); 

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectedCabinet >= 0 && selectedCabinet < cargoHold.length) {
  console.log(`Contents: ${selectedCabinet}: ${cargoHold[selectedCabinet].join(", ")}`);
} else {
  console.log("Error. Incorrect cabinet num");
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

//let cabinetItem = input.question("Enter cabinet num (0 - 3): ");
//let selectedItem = input.question("Enter item in cabinet: ");

if (cabinetItem >= 0 && cabinetItem < cargoHold.length) {
  if (cargoHold[cabinetItem].includes(selectedItem)) {
    console.log(`Cabinet ${cabinetItem} contains ${selectedItem}.`);
  } else {
    console.log(`Cabinet ${cabinetItem} Item missing ${selectedItem}.`);
  }
} else {
  console.log("Error: Invalid num.");
}
