const RPS = require('../RPS.js');

describe ("whoWon", function(){

 test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    let output = RPS.whoWon('rock','paper');
    expect(output).toBe("Player 2 wins!");
 });
 
 test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    let output = RPS.whoWon('paper','scissors');
    expect(output).toBe("Player 2 wins!");
 });

 test("returns 'Invalid input...' if invalid inputs are provided", function() {
    let output = RPS.whoWon('rock', 'invalid');
    expect(output).toBe('Invalid input. Please enter either "rock", "paper", or "scissors".');
 });

});