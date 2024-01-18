let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = "water bottles,meal packs,snacks,chocolate".split(',').sort();
let cabinet2 = "space suits,jet packs,tool belts,thermal detonators".split(', ').sort();
let cabinet3 = "parrots,cats,moose,alien eggs".split(', ').sort();
let cabinet4 = "blankets,pillows,eyepatches,alarm clocks".split(', ').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
const cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];
console.log("Cargo Hold Structure:");
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const selectedCabinet = input.questionInt("Select a cabinet (0-3):");  //PART 5) const input = require('readline-sync');

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
//if (!isNaN(selectedCabinet) && selectedCabinet >= 0 && selectedCabinet < cargoHold.length) {
  //  console.log(`Contents of Cabinet ${selectedCabinet}: ${cargoHold[selectedCabinet]}`);
  //} else {
    //console.log("Invalid cabinet selection. Please enter a number between 0 and 3.");
  //}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


