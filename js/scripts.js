// Business logic for number generator-this is the dice roll
let rollDice = function () {
  return Math.floor((Math.random() * 6) +1);
};

// Business Logic for Players:
function Players(){
  
};


// User Interface Logic:

$(document).ready(function() {
  $('.player1').submit(function(event) {
    event.preventDefault();
    testVar = rollDice();
    $('.player1Dice1').text(testVar);
    
  });

  $('.player1Hold').submit(function (event) {
    event.preventDefault();
  });
  
});


// function myFunction() {
//  var x = Math.floor((Math.random() * 6) + 1);
//  document.getElementById("demo").innerHTML = x;
// }