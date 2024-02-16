//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate { //PART 1
    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }

    addScore(newScore) { // Method add new score to candidate's records PART 2
      this.scores.push(newScore);
  }
    
    average() {  // Method to calculate the average test score
      const sum = this.scores.reduce((total, score) => total + score, 0);
      const average = sum / this.scores.length;
  return Math.round(average * 10) / 10; // Rounds to 1 decimal place
  } 
}


// Create objects for the candidates
  let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
  let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
  let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
  
// Verify the objects using console.log
   console.log(bubbaBear);
   console.log(merryMaltese);
   console.log(gladGator);
 
// Add a new score to Bubba's record & Print out Bubba's new score array
bubbaBear.addScore(83);
console.log("Bubba Bear's scores after adding a new score:", bubbaBear.scores);

 // Verify the average test scores
console.log("Merry Maltese's average test score:", merryMaltese.average());
console.log("Bubba Bear's average test score:", bubbaBear.average());
console.log("Glad Gator's average test score:", gladGator.average());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.