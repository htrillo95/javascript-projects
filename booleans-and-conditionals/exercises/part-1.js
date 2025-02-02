// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
   // engines are off will print since the light is currently "red blinking"

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus) {
   console.log("Crew Ready");
 } else {
   console.log("Crew Not Ready");
 }

 if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
 } else if (computerStatusCode === 400) {
   console.log("Success! Computer online.");
 } else {
   console.log("Alert: Computer offline!");
 }

 if (shuttleSpeed > 17500) {
  console.log("Alert: Escape velocity reached!");
 } else if (computerStatusCode < 8000) {
  console.log("Alert: Cannot maintain orbit!");
 } else {
  console.log("Stable speed");
 }

 // Part 4. PREDICT. The two code blocks do not produce the same result. First code bloack prints "all systems go"
    // Second block produces "Warning. Not ready" -- INCORRECT. They both produced "All systems go"

    if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
      console.log("all systems go");
   } else {
      console.log("WARNING. Not ready");
   }

   if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }

// Part 5. Monitor shuttle's fuel status

let fuelLevel = 0
let engineTemperature = 0

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "Red Blinking") {
  console.log(" ENGINE FAILURE IMMENENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engine running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log ("Fuel level above %50. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level abovve 25%. Engines good.");
}
  else console.log("Fuel and engine status pending...");

// Part. 5 Final bit of fun!

let commandOveride = true

if (commandOveride === false){
  if (fuelLevel > 20000 && engineIndicatorLight != "red blinking" || commandOveride === true);
    console.log("Cleared to launch!");
}
  else console.log("Launch scrubbed!");

