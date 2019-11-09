/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Create a binary number to decimal calculator where the binary number is 
accepted as a STRING INPUT. Assume that all binary numbers have 8 bits.

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