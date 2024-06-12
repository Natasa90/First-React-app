function sumOfDigits(num) {
    let sum = num;

    while (sum >= 10) { // Keep looping until sum is a single digit
        let tempSum = 0;
        while (sum > 0) {
            tempSum += sum % 10; // Add the rightmost digit to tempSum
            sum = Math.floor(sum / 10); // Remove the rightmost digit from sum
        }
        sum = tempSum; // Update sum to the new sum of its digits
    }

    return sum;
}

const number = 943;
console.log(sumOfDigits(number));