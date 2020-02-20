/*Find 3 exercises that you have did in 3 ways, or do 3 exercises in 3 ways if you haven’t did that yet.
Create 3 repository’s (each exercise get one repo).
Add 3 branches in every repo (each branch has a different solution).
Upload 3 photos (one photo to each branch) to your README.md showing your code and the console part, 
explain your steps and links to your resources (mdn or so).*/ 

//EXERCISE 1: 
/*Exercise.A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he 
took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.*/

// this is the normal mathematical way: 
let score5test = 75 + 70 + 85 + 90 + 100; 
console.log(score5test); //420 all the results together
let scoreAve = 85 * 6; // the result is the average among all the test
let finalResult = scoreAve - score5test; // we find out how much was the score on the last exam
console.log(`THe score on the sixth text is ${finalResult}`); // result printed 
