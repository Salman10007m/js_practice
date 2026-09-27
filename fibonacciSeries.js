const f = require("./nth_fibonacci");

function fibonacciSeries(range) {
    if (range <= 0) return 0;
    const series = `${fibonacciSeries(range - 1)}\n${f.fibonacci(range)}`;
    return series;
}

console.log(fibonacciSeries(5));
