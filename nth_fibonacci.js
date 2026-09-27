function fibonacci(nthNum) {
    if (nthNum === 0) return 0;
    else if (nthNum === 1 || nthNum === 2) return 1;

    return fibonacci(nthNum - 1) + fibonacci(nthNum - 2);
}
// console.log(fibonacci(5));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

module.exports = {
    fibonacci,
};
