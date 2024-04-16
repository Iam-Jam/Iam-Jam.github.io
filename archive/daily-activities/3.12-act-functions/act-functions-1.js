
function operation(operationType, firstNumber, secondNumber) {
    let result = "";

    if (operationType === 'sum') {
        result = Number(firstNumber) + Number(secondNumber);
    } else if (operationType === 'difference') {
        result = Number(firstNumber) - Number(secondNumber);
    } else if (operationType === 'product') {
        result = Number(firstNumber) * Number(secondNumber);
    } else if (operationType === 'quotient') {
        if (secondNumber !== 0) {
            result = Number(firstNumber) / Number(secondNumber);
        } else {
            result = "";
        }
    }

    document.getElementById("num-total").value = result;
}

