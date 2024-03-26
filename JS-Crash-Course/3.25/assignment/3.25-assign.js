let num1 = prompt("Enter Minimum Number");
let num2 = prompt("Enter Maximum Number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function printEvenNumbers(start, end) {
    if (start > end) {
        return;
    }

    if (start % 2 === 0) {
        console.log(start);
    }
    printEvenNumbers(start + 1, end);
}

printEvenNumbers(num1, num2);