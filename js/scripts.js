// Business Logic for Players:
function Players(roll, totalScore){
  this.playerTurn = playerTurn; //(use booleon to determine whose turn it is)
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  };

// Business logic for dice roll generator
let rollDice = function () {
  return Math.floor((Math.random() * 6) +1);
};
 //Business logic for turn score
Players.prototype.rollsOne = function() {
  if (rollDice === 1);
    this.turnScore = 0;
    this.playerTurn = false;
    alert("You rolled a 1. Now it's your opponent's turn!");
    // add logic to switching turns
  };
Players.prototype.rollsOther = function() {
    if (rollDice < 1);
    this.turnScore += rollDice
  };

  // Business logic for total score
  Players.prototype.finalScore = function() {

  };

// prototype for players
// players.prototype.totalRoll
// this.totalScore += this.turnScore will show the grand total score
// add functionality to reset turn score
// use same structure for each player - could show/hide each of the players triggered by clicking on hold button or rolling a 1
// User Interface Logic:

$(document).ready(function() {
//////////////////////////////////////////////
  $('.player1').submit(function(event) {
    event.preventDefault();

    testVar = rollDice();
    let currentScore = 0 + testVar

    $('.player1Dice1').text(currentScore);
    
  });
//////////////////////////////////////////////
  $('.player1Hold').submit(function (event) {
    event.preventDefault();
  });
  
/////////////////////////////////////////////
  $('.player2').submit(function(event) {
    event.preventDefault();
    testVar = rollDice();
    $('.player2Dice1').text(testVar);
    
  });
/////////////////////////////////////////////
  $('.player2Hold').submit(function (event) {
    event.preventDefault();
  });
//////////////////////////////////////////////
});