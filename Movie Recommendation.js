/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Provide Movie Recommendations

*/

var age = Number(prompt("Enter your age over here:"));

if (age>=0 && age < 117) {
  //G Rated Movies 
  console.log("Anyone can enjoy G-rated movies");
  if (age < 13) {
    console.log("You may watch PG movies.");
  } else if (age < 17) {
  console.log("You may watch PG and PG-13 movies."); 
  }  else { 
      console.log("You may enjoy all types of movies.");
  }
}