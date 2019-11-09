/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Higher or Lower Game

*/

// Input & Variable Initialization

var randomNumber = Math.random() * 100;
var cleanRandomNumber = Math.floor(randomNumber);
// Variable cleanRandonNumber contains our first random number

var message = "The computer generated: " + cleanRandomNumber + ". Will the next number be higher or lower?"

var userChoice = prompt(message);
var randomNumber2 = Math.floor(Math.random() * 100);
// Variable randomNumber2 is our second random number

// Processing
/* How did we solve it?
1. First Check if the user's choice was either: higher or lower
2. Then check if the 2nd random number was either greater than the First or
lower than the First

*/

if (userChoice == "higher") {
  console.log("The second random number was:", randomNumber2);
  if (randomNumber2 > cleanRandomNumber) {
    console.log("You were right!");
  } else {
    console.log("You were wrong!");
  }
// End of first if
} else if (userChoice == "lower") {
  console.log("The second random number was:", randomNumber2);
  if (randomNumber2 < cleanRandomNumber) {
    console.log("You were right!");
  } else {
    console.log("You were wrong!");
  }
// End of first else if
} else {
  console.log("You dun goofed!");
}