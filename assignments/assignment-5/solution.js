function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(`The result of adding is ${result}.`);
}

addTwoNumbers(10, 2);

function subtractTwoNumbers(num1, num2) {
    let result = num1 - num2;
    console.log(`The result of subtracting is ${result}.`);
}

subtractTwoNumbers(20, 6);

function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    console.log(`The result of multiplying is ${result}.`);
}

multiplyTwoNumbers(2, 5);

function divideTwoNumbers(num1, num2) {
    let result = num1 / num2;
    console.log(`The result of dividing is ${result}.`);
}

divideTwoNumbers(10, 5);

console.log(`_--------------_`);
// Refactor

function calculate(num1, num2, cb) {
    return `The result of ${cb(num1, num2)}`;
}

function adding(num1, num2) {
    return `adding is ${num1 + num2}`;
}

function subtracting(num1, num2) {
    return `subtracting is ${num1 - num2}`;
}

function multiplying(num1, num2) {
    return `multiplying is ${num1 * num2}`;
}

function dividing(num1, num2) {
    return `dividing is ${num1 / num2}`;
}

console.log(calculate(10, 3, adding));
console.log(calculate(20, 10, subtracting));
console.log(calculate(4, 4, multiplying));
console.log(calculate(8, 2, dividing));
