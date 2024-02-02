// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];
let selectedNumbers = [];

function selectRandomEntry(array) {
  let randomNumber = Math.floor(Math.random() * array.length); // Generate a random index within the length of the array
  return array[randomNumber];  // Return the randomly selected entry to selectedNumbers array
}

for (let i = 0; i < 3; i++) { // Select three unique ID numbers from idNumers array
    let randomEntry = selectRandomEntry(idNumbers); //calls function above
    while (selectedNumbers.includes(randomEntry)) { // Checks if selected number is unique
        randomEntry = selectRandomEntry(idNumbers);
    }

    selectedNumbers.push(randomEntry); // Add/push unique number to the selectedNumbers array above
}

console.log("Selected ID Numbers:", selectedNumbers); // Log in console

// Code your buildCrewArray function here:
function buildCrewArray (idNumbers, candidates){
  let selectedCrew = [];

  for (let id of idNumbers) {
    for (let candidate of candidates) {
      if (candidate.astronautID === id) {
        selectedCrew.push(candidate);
      }
    }
  }

let names = selectedCrew.map(animal => animal.name).join(', ');
console.log(`${names} are going to space!`);
return selectedCrew;
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let crewMembers = buildCrewArray(selectedNumbers, animals); // . 


// update
