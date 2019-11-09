/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Create a program that adds all numbers from 1 to User Input of a value

*/

var upperLimit = Number(prompt("Enter an upper limit"));
var totalSum = 0;

// Solution 1 - Using For Loop
for (var counter =1;counter <= upperLimit; counter++) {
  totalSum = totalSum + counter;
}

console.log("The total sum up to", upperLimit, "is", totalSum);

//Solution 2 - Without Loop
totalSum = (upperLimit*(upperLimit+1))/2;

console.log("The total sum is:", totalSum);