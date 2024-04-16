let weight = prompt("Enter your weight in kilograms");
let height = prompt("Enter your height in meters");

weight = parseFloat(weight);
height = parseFloat(height);

let BMI = weight / (height * height);


if (BMI <= 16) {
    console.log("BMI Result: " + BMI);
    console.log("Severely Underweight");
}
else if (BMI >= 16.0 && BMI <= 18.4) { 
    console.log("BMI Result: " + BMI);
    console.log("Underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) { 
    console.log("BMI Result: " + BMI);
    console.log("Normal Weight");
}
else if (BMI >= 25.0 && BMI <= 29.9) { 
    console.log("BMI Result: " + BMI);
    console.log("OverWeight");
}
else if (BMI >= 30.0 && BMI <= 34.9) { 
    console.log("BMI Result: " + BMI);
    console.log("Moderately Obese");
}
else if (BMI >= 35.0 && BMI <= 39.9) { 
    console.log("BMI Result: " + BMI);
    console.log("Severely Obese");
}
else if (BMI >= 40.0) { 
    console.log("BMI Result: " + BMI);
    console.log("Morbidly Obese");
}

    

