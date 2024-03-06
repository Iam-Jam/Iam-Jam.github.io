
let AdultAge = 18;
let Age = 15; 

if (Age<AdultAge) {
    console.log("Minor");
}

else { 
    console.log("Adult");
}

// Grading System - 1, 2, 3, 5

// 90 - 100 => 1
// 80 - 89 => 2
// 75 - 79 => 3
// <74 =>5

let Grade = 80;
let TransGrade = 0;

if (Grade>=90 && Grade<=100) {
    TransGrade = 1;
    // console.log("Minor");
}

else if (Grade>=80 && Grade<=89) { 
    TransGrade = 2;
}

else if (Grade>=75 && Grade<=79) { 
    TransGrade = 3;
}

else { 
    TransGrade = 5;
}

console.log(TransGrade)

//Next Example

git status



