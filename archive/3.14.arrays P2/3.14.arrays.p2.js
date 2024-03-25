let ArrStudents = ['alexa', 'jaileen', 'diether', 'emman'];
console.log(ArrStudents);

//sort
ArrStudents.sort();
console.log(ArrStudents);

//reverse
ArrStudents.reverse();
console.log(ArrStudents);

//string
let StringStudents = ArrStudents.join('|');
console.log(StringStudents);

//Destructuring
let ArrFoods = ['burger', 'hotdog', 'spghetti', 'chicken', 'sundae', 'fries'];
// let Burger = ArrFoods[0];
// let Hotdog = ArrFoods[1];
// let Spaghetti = ArrFoods[2];

let [Burger, Hotdog, Spaghetti, Manok, IceCream, FrenchFries, Softdrinks = 'Coke'] = ArrFoods;
// console.log(Softdrinks);

// let [Burger, Hotdog, ...OtherFoods] = ArrFoods;
// console.log(OtherFoods);

let ArrGrades = [89, 95, 94, 50];
let [Math, Science, PE, Programming] = ArrGrades;
// console.log(PE);

//Value Swap
let Num1 = 10;
let Num2 = 5;
// console.log(Num1,Num2);

//Updating Arrays
let ArrSubjects = ['Math', 'Science', 'Programming'];
console.log(ArrSubjects);

ArrSubjects[2] = "Web Development";
console.log(ArrSubjects);


