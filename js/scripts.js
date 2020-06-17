// Business Logic for GameBoard:
// function GameBoard() {
// this.player1 = player1REE
// this.player2 = player2ree


// }

// GameBoard.prototype.addPlayer1

// Business Logic for Players:
function Players(){
  this.player1 = player1;
  this.player2 = player2;
}

// User Interface Logic:
$(document).ready(function) {
  $('.player1Roll').submit(function(event){
    event.preventDefault();
  })

  $('.player1Hold').submit(function (event) {
    event.preventDefault();
  })

  $('.player2Roll').submit(function(event){
    event.preventDefault();
  })

  $('.player2Hold').submit(function (event) {
    event.preventDefault();
  })
  
}


// function myFunction() {
//  var x = Math.floor((Math.random() * 6) + 1);
//  document.getElementById("demo").innerHTML = x;
// }

// Dice and 2
// Total 2 dice
// Score total