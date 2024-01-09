// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count check!");
}   else {
    console.log("ABORT, exceeded count!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus = "ready") {
    console.log("Astronauts are ready!");
}   else {
    console.log("ABORT! astronauts not ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass check!");
}   else {
    console.log("ABORT! exceeded mass limit!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) {
    console.log("Fuel temp check!");
}   else {
    console.log("ABORT! check fuel temp!");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = "100") {
    console.log("FUEL FULL!");
}   else {
    console.log("ABORT! Fuel level not at 100%!");
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear") {
    console.log ("Weather is clear!");
}   else {
    console.log ("ABORT! Weather not clear.");
}
// Verify shuttle launch can proceed based on above conditions
console.log ("------------------------------------------------");
console.log (date = "Monday 2019-03-18");
console.log (time = "10:05:34 AM");
console.log (astronautCount = 7);
console.log (astronautStatus = "ready");
console.log (averageAstronautMassKg = 80.7);
console.log (crewMassKg = astronautCount * averageAstronautMassKg);
console.log (fuelMassKg = 760000);
console.log (shuttleMassKg = 74842.31);
console.log (totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg);
console.log (maximumMassLimit = 850000);
console.log (fuelTempCelsius = -225);
console.log (minimumFuelTemp = -300);
console.log (maximumFuelTemp = -150);
console.log (fuelLevel = "100%");
console.log (weatherStatus = "clear");
console.log (preparedForLiftOff = true);
console.log ("------------------------------------------------");
console.log ("SAFE FLIGHT ASTRONAUTS!!");