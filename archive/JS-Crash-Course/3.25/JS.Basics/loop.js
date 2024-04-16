let num1 = prompt("Enter Minimum Number");
let num2 = prompt("Enter Maximum Number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2) {
    alert("Invalid Entry");
}
else { 
    for (let x = num1; x <= num2; x++) {
        console.log(x);
    }
}