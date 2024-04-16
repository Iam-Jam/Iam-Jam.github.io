function printNumbers() {
    let evenNumbers = [];
    let oddNumbers = [];

    function printInputNumbers() {
        let Number = parseFloat(prompt("Enter Your Number:"));

        if (Number == 0) {
            console.log("Even Numbers: " + evenNumbers.join(" | "));
            console.log("Odd Numbers: " + oddNumbers.join(" | "));
            return;
        }

        if (Number % 2 == 0) {
            evenNumbers.push(Number);
        } else {
            oddNumbers.push(Number);
        }
        printInputNumbers();
    }
    printInputNumbers();
}
printNumbers(); 