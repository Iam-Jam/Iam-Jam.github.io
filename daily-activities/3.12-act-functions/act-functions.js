function operation(operationType) {
    var firstNumber = parseFloat(document.getElementById("num-first-number").value);
    var secondNumber = parseFloat(document.getElementById("num-second-number").value);
    var result;

    if (operationType === 'sum') {
        result = firstNumber + secondNumber;
    } else if (operationType === 'difference') {
        result = firstNumber - secondNumber;
    } else if (operationType === 'product') {
        result = firstNumber * secondNumber;
    } else if (operationType === 'quotient') {
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            result = "Cannot divide by zero";
        }
    }

    document.getElementById("num-total").value = result;
}
