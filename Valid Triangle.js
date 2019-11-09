/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To figure out if three inputted values make a valid triangle

*/

// Input 

var sideOne = prompt("Enter the First Side Length Here");
var sideTwo = prompt("Enter the Second Side Length Here");
var sideThree = prompt("Enter the Third Side Length Here");
var isTrueOne =(null);
var isTrueTwo =(null);
var isTrueThree =(null);
var isTrue;

// Processing 

isTrueOne = (+sideOne) + (+sideTwo)>=(sideThree);
isTrueTwo = (+sideOne) + (+sideThree)>=(sideTwo);
isTrueThree = (+sideTwo) + (+sideThree)>=(sideOne);

isTrue = isTrueOne&&isTrueTwo&&isTrueThree;