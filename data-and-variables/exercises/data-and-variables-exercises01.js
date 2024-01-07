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
//milesToMars = km x mpk 225000000 x .621
//hoursToMars = milesToMars / shuttleSpeed
//daysToMars = hoursToMars / 24
let milesToMars = 139725000;
let hoursToMars = 7984.28;
let daysToMars = 332.67;

// Print the results of the space mission calculations below
console.log (shuttleName + " will take " + daysToMars + " days to reach Mars");

// Calculate a trip to the moon below

//multiple distToMoon with mPK
//miles to moon = 384400 km x .0621 mpk  = 23871.24 miles
let milesToMoon = 23871
//miles to moon / shuttle speed = 238712.24 miles / 17500 mph = 13.64 hours
let hourToMoon = 13.64
//hours to moon / 24 hours.. 13.64 hours / 24 = .568 days
let daysToMoon = .568
// Print the results of the trip to the moon below

console.log (shuttleName + "wiill take" + daysToMoon + "days to reach the moon");