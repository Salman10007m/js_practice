function factorial(fact) {
    if (fact > 1) {
        return fact * factorial(fact - 1);
    }
    return 1;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(6));
