function compoundInterest(principalAmount, rateOfInterest, time) {
    const totalAmount = principalAmount * (1 + rateOfInterest / 100) ** time;
    const compoundInterest = totalAmount - principalAmount;
    return compoundInterest;
}

console.log(compoundInterest(1000, 10, 2));
