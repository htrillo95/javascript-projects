// Declare and assign the variables below
let shuttleName = "Determination"
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "shuttleName");
console.log(typeof "shuttleSpeed");
console.log(typeof "distanceToMars");
console.log(typeof "distanceToMoon");
console.log(typeof "milesPerKm");

// Calculate a space mission below
let milesToMars = 139725000;
let hoursToMars = 7984.28;
let daysToMars = 332.67;

// Print the results of the space mission calculations below
console.log (shuttleName + " will take " + daysToMars + " days to reach Mars");

// Calculate a trip to the moon below

//multiple distToMoon with mPK
//384400 x .0621  = 23871.24 miles to moon
let milesToMoon = 23871
//hours to moon... miles to moon / shuttle speed.. 238712.24 / 17500 = 13.64
let hourToMoon = 13.64
//days to moon... hours to moon / 24 hours.. 13.64 / 24 = .568
let daysToMoon = .568
// Print the results of the trip to the moon below

console.log (shuttleName + "wiill take" + daysToMoon + "days to reach the moon");