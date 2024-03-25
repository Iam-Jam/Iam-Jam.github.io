let Item = "bag";
let NOofItems = 3;
let IsCheckOut = true;

let ArrayItems = ["apple", "grapes", "banana", "orange", "avocado", "star fruit", "dragon fruit"]; //variable - New Array - Array();

//Array.push();
// ArrayItems.push("watermelon"); //add items at the end of the array
// ArrayItems.unshift("guava"); //add items at the beginning of the array
// ArrayItems.pop(); //removes items at the end of the array.

let RemovedItem1 = ArrayItems.pop();
let RemovedItem2 = ArrayItems.shift();

console.log("Removed Item ; " + RemovedItem);






let TotalLength = ArrayItems.length;

for (var x = 0; x < 5; x++) { 
    console.log(x + ";" + ArrayItems[x]);
}


let ArrayMixItems = ["Jesthony", 34, true, ['Web Developer', 'Computer Technician', 'Coach']
];

console.log(ArrayItems[0]); //apple
console.log(ArrayMixItems[2]); //true will come out
console.log(ArrayMixItems[3]); //['Web Developer', 'Computer Technician', 'Coach']
console.log(ArrayMixItems[3][0]); //Web Developer
console.log(ArrayMixItems[0] + " is a " + ArrayMixItems[3][0]); //Jesthony is a Web Developer
