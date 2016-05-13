//Hi Lo game

var computerNum = Math.floor(Math.random() * 100 + 1);
var counter = 0;
var win = 0;
var losses = 0;

//Computer picks random integer between 0 and 100 and compares to user input
function hiLo() {
  //Converts user input from string to integer
  var userNum = parseInt(document.getElementById("userGuess").value);
  //Clears text field on guesses
  document.getElementById("userGuess").value = "";

  if (userNum > computerNum) {
    document.getElementById("outputText").innerHTML = userNum + " is too high!";
    counter++;
  }

  if (userNum < computerNum) {
    document.getElementById("outputText").innerHTML = userNum + " is too low!";
    counter++;
  }

  if (userNum === computerNum) {
    document.getElementById("outputText").innerHTML = "You win!";
    win++;
    document.getElementById("outputWin").innerHTML = win;
    computerNum = Math.floor(Math.random() * 100 + 1);
  }
  if (counter >= 7) {
    counter = 0;
    document.getElementById("outputText").innerHTML = "Too Many Guesses, Homie.";
    computerNum = Math.floor(Math.random() * 100 + 1);
    losses++;
    document.getElementById("outputLoss").innerHTML = losses;
  }
}

//Takes input from text field on keypress 13
function enter(e){
 var key = e.keyCode || e.which;
  if (key === 13){
     hiLo();
  }
}


function newNum() {
    computerNum = Math.floor(Math.random() * 100 + 1);
    counter = 0;
    document.getElementById("output").innerHTML = "Try again bruh."
}

// When you press "R" refreshes page
// function refresh(r){
//  var key = e.keyCode || e.which;
//   if (key === 82){
//     computerNum = Math.floor(Math.random() * 100 + 1);
//   }
// }
