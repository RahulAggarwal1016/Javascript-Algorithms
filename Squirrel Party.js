/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Code based http://www.javaproblems.com/2013/11/java-logic-1-cigarparty-codingbat.html

*/

//Input 
var isWeeken = prompt("Is it the weekend (Y/N)?");
var numAcorns = Number(prompt("How many acorns you got?"));

//Processing

if (isWeekend == "Y") {
  console.log("The party is successful with,", numAcorns);
} else if (isWeekend == "N") {
  if (numAcorns >= 40 && numAcorns <= 60)
    console.log("The party was successful with,", numAcorns);
  } else {
    console.log("The party is not a success");
  }
}