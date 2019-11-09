/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Check if a number is two away from a multiple of 10

*/

// Input & Variable Initialization
var num = Number(prompt("Enter a number"));

// Processing
if (num % 10 == 2 || num % 10 == 8) {
  console.log(num,"is 2 away from a factor of 10.");
} else {
  console.log("Nope.");
}