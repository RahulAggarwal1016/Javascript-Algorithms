 /*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Add up all the squares under 200 inclusively 

*/

var counter =1;
var totalSum = 0;

while (totalSum <= 200) {
  totalSum = totalSum + counter**2;
  counter++;
}

console.log("The total sum of square is;", totalSum);