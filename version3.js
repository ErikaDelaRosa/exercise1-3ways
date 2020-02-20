/*Find 3 exercises that you have did in 3 ways, or do 3 exercises in 3 ways if you haven’t did that yet.
Create 3 repository’s (each exercise get one repo).
Add 3 branches in every repo (each branch has a different solution).
Upload 3 photos (one photo to each branch) to your README.md showing your code and the console part, 
explain your steps and links to your resources (mdn or so).*/ 

//EXERCISE 1: 
/*Exercise.A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he 
took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.*/

//Here i tried the array form
let arrScore = [75 + 70 + 85 + 90 + 100]; // i used an array for all the results I know already.
const totalSumArrScore = arrScore.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}) // on this part i need to do the calculation from the array, and then follow the math logic
console.log(arrScore);
let avMath = [85]; 
const totalSum =  avMath * 6 ;
console.log(totalSum);
const sixthTest = totalSum - arrScore; 
console.log(`Happy days! the result of the last math exam is ${sixthTest}`); // this is the result 
