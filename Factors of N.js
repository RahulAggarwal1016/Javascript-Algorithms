/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Find factors of a number

*/

var upper_limit = Number(prompt("Enter a value: "));
for (counter = 1; counter <= upper_limit; counter++) {
 if (upper_limit % counter ===0) {
   console.log(counter,"is a factor");
 }
}

//Processing With a while loop

var counter = 1;
while (counter <= upper_limit) {
  if (upper_limit % counter ==0) {
    console.log(counter, "is a factor.");
  }
  counter++;
}