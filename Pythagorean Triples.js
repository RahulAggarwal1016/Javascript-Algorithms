/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To figure out if three values are pythagorean triples
*/

// Input

var side_a = prompt("Enter the Value of A");
var side_b = prompt("Enter the Value of B");
var side_c = prompt("Enter the Value of C");

//Processing

if ((side_a**2)+(side_b**2)==(side_c**2)) {
  console.log("They are pythagorean triplets");
} else {
  console.log("Not pythagorean triplets");
}