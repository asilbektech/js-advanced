// Easy Problems

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function temperatureConverter(unit) {
    return function (temp) {
        if (unit === "C") {
            return ((temp - 32) * 5) / 9;
        } else if (unit === "F") {
            return (temp * 9) / 5 + 32;
        }
    };
}

const toCelsius = temperatureConverter("C");

console.log(toCelsius(32));
console.log(toCelsius(80));

function greet(name) {
    return function (timing) {
        console.log(`Good ${timing} ${name}`);
    };
}

const greetJohn = greet("John");
greetJohn("Morning"); // 'Good Morning, John!'

function interestCalculator(rate) {
    return function (interest) {
        return (rate / 100) * interest;
    };
}

const simpleInterest = interestCalculator(5);
console.log(simpleInterest(1000)); // 50
console.log(simpleInterest(1500)); // 75

function multiplier(factor) {
    return function (anyNumber) {
        return factor * anyNumber;
    };
}

const double = multiplier(2);
console.log(double(5));
console.log(double(20));
console.log("-----------------");

// Medium Problems

function doubleMultiplier(factor, factor1) {
    return function (anyNumber) {
        return factor * factor1 * anyNumber;
    };
}

const doubleAndTriple = doubleMultiplier(2, 3);
console.log(doubleAndTriple(5));
console.log(doubleAndTriple(25));

function sequentialGreetings(name) {
    return {
        morning: function () {
            return `Good morning, ${name}!`;
        },
        afternoon: function () {
            return `Good afternoon, ${name}!`;
        },
        evening: function () {
            return `Good evening, ${name}!`;
        },
        night: function () {
            return `Good night, ${name}!`;
        }
    };
}

const johnGreeting = sequentialGreetings("John");

console.log(johnGreeting.morning());
console.log(johnGreeting.afternoon());
console.log(johnGreeting.evening());
console.log(johnGreeting.night());

function multiplicationTable(num) {
    return function () {
        const multiTable = [];
        for (let i = 1; i < 10; i++) {
            multiTable.push(num * i);
        }
        return multiTable;
    };
}

const tableOfThree = multiplicationTable(3);
console.log(tableOfThree()); // [3, 6, 9, ... , 30]

function favoriteColorReminder(name, favoriteColor) {
    return function () {
        console.log(`${name}'s favorite color is ${favoriteColor}`);
    };
}

const johnsColor = favoriteColorReminder("John", "Blue");
johnsColor(); // 'John's favorite color is Blue.'

function removeNumber(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeNumber([1, 2, 5, 3, 8], 3));
