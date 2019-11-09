/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Vowel Counter

*/

var word = prompt("Enter a word");
var vowelCounter = 0;
// Processing
//To Count our vowels = a,e,i,o,u

//For of Loop: the following code
//helps us access individual letters from word.
for (var letter of word) {
  //for each letter, check if it's a vowel.
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    vowelCounter++;
  }
}

//Output 

console.log('The number of Vowels are', vowelCounter++);