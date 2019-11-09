/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Conditional Based Grades Program

*/

// Input & Variable Initialization
var grades = Number(prompt("Enter your grade: "));

// Processing & Output
if (grades >= 0 && grades <= 100) {
  if (grades >= 80) {
    console.log("You got an A.");
    if (grades == 100) {
      console.log("You are elligible for: $5500 Scholarship.");
    } else if (grades >= 95) {
      console.log("You are elligible for: $2000 Scholarship.");
    } else if (grades >= 90) {
      console.log("You are elligible for: $1000 Scholarship.");
    }
  } else if (grade >= 70) {
    console.log("You got a B.");
  } else if (grade >= 60) {
    console.log("You got a C.");
  } else if (grade >= 50) {
    console.log("You got a D.");
  } else {
    console.log("You got a F.");
    if (grades >= 40) {
      console.log("You are elligible for credit recovery.");
    } else if (grade >= 30) {
      console.log("You are elligible for summer school.");
    } else {
      console.log("You are recommended to take the course again.")
    }
  }
} else {
  console.log("Invalid Grade.");
}