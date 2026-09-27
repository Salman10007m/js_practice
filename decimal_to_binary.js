function decimalToBinary(decimal) {
    if (decimal === 0) {
        return "";
    }
    const modulo = decimal % 2;
    const binary = `${decimalToBinary(Math.floor(decimal / 2))}${modulo}`;
    return binary;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(5));
console.log(decimalToBinary(12));
console.log(decimalToBinary(15));
