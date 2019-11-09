/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Create a program that determines the numbers that are divisible by 7 
and is a multiple of 5 between 1500 and 2700 inclusively.

*/

var binary = String(prompt("Enter a binary number"));
var totalValue = 0;
var exponent = 7;

for (var digit of binary) {
  if (digit == "1") {
    totalValue = totalValue + (2**exponent);
  }
  exponent--;
}

console.log("The value is:", totalValue);

for (var num = 1500; num <= 2700; num++) {
  if (num % 7 === 0 && num % 5 === 0) {
    console.log(num);
  }
}