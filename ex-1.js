const add = (a, b) => a + b;

const cents = (a, b) => (a * 10 + b * 10) / 10;

console.log(add(0.1, 0.2));
// code has a rounding error due to 0.1 being a rounded number.

console.log(add(0.1, 0.2).toFixed(2));
console.log(add(0.1, 0.2).toPrecision(2));
// code still shows the addition decimal place due to it being a rounded number.

console.log(add(0.1, 0.4));
// numbers cancel each other out in rounding issues.
console.log(add(0.1, 0.3));
// numbers are close enough that it cancels the decimals out.

console.log(add(0.2, 0.1).toPrecision(2));
console.log(cents(0.2, 0.1));
// by converting to cents you remove the issue with the rounding error.
