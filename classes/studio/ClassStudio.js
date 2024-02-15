//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }

  // Method to add a new score to the candidate's records
  addScore(newScore) {
    this.scores.push(newScore);
  }

// Method to calculate the average test score
average() {
    const sum = this.scores.reduce((total, score) => total + score, 0);
    const average = sum / this.scores.length;
    return Math.round(average * 10) / 10; // Round to 1 decimal place
}
}
  // Create objects for the candidates
  const bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);

// Add a new score to Bubba's record
bubbaBear.addScore(83);

// Print out Bubba's new score array
console.log("Bubba Bear's scores after adding a new score:", bubbaBear.scores);

  const merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);

  // Verify the average test score for Merry Maltese
console.log("Merry Maltese's average test score:", merryMaltese.average());

  const gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
  
  // Verify the objects using console.log
  console.log(bubbaBear);
  console.log(merryMaltese);
  console.log(gladGator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.