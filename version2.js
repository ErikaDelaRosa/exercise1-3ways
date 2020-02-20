/*Find 3 exercises that you have did in 3 ways, or do 3 exercises in 3 ways if you haven’t did that yet.
Create 3 repository’s (each exercise get one repo).
Add 3 branches in every repo (each branch has a different solution).
Upload 3 photos (one photo to each branch) to your README.md showing your code and the console part, 
explain your steps and links to your resources (mdn or so).*/ 

//EXERCISE 1: 
/*Exercise.A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he 
took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.*/

// here i tried a function, so we can re-use it with different scores. 
// first add the variable with the data
let score5test = 75 + 70 + 85 + 90 + 100; 
function finalExam (math6Average) {
    let totalAveg = math6Average * 6;
    let sum = score5test;
    let fResult = totalAveg - sum;
    console.log(`Your result on the latest Math exam is ${fResult}`);
    }
    finalExam(85); // we can add the number(average) in here to know the result of the sixth test. 