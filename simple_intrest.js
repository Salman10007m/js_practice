function simpleInterest(principalAmount, rateOfInterest, time) {
    const simpleInterest = (principalAmount * rateOfInterest * time) / 100;
    return simpleInterest;
}

console.log(simpleInterest(1000, 5, 2));
console.log(simpleInterest(2000, 8, 3));
