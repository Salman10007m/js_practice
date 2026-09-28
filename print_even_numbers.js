function printEvenNumbers(range) {
    if (range <= 2) {
        return 2;
    }
    if (range % 2 === 0) {
        return `${printEvenNumbers(range - 1)}\n${range}`;
    }
    return `${printEvenNumbers(range - 1)}`;
}

console.log(printEvenNumbers(11));
