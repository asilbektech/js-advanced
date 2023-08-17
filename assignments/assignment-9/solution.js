// Problem 1
// Create a function that doubles the age property of each object in an array

// Input: [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]

// Output: [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }]

function doubleTheAge(objects) {
    const double = objects.map((obj) => {
        return {
            obj,
            age: obj.age * 2
        };
    });
    return double;
}

const result = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.log(doubleTheAge(result));

//  Problem 2
// Create a function that capitalizes the first letter of each string in an array

// Input: ['apple', 'banana']

// Output: ['Apple', 'Banana']

function capitalize(string) {
    const capitalized = string.map((str) => {
        return str[0].toUpperCase() + str.slice(1);
    });
    return capitalized;
}

const result2 = ["apple", "banana"];

console.log(capitalize(result2));

// Problem 3
// Create a function that returns the square of the first element of each sub-array

// Input: [[2, 3], [4, 5], [6, 7]]

// Output: [4, 16, 36]

function squareOfElement(element) {
    const square = element.map((ele) => {
        return ele[0] * ele[0];
    });
    return square;
}

const result3 = [
    [2, 3],
    [4, 5],
    [6, 7]
];

console.log(squareOfElement(result3));

// Problem 4
// Create a function that concatenates a specific string to each property in an object array

// Input: [{ word: 'cat' }, { word: 'dog' }], string = 's'

// Output: [{ word: 'cats' }, { word: 'dogs' }]

function concatenate(object) {
    const concat = object.map((obj) => {
        const str = "s";
        return obj.word + str;
    });
    return concat;
}

const result4 = [{ word: "cat" }, { word: "dog" }];

console.log(concatenate(result4));

// Problem 5
// Create a function that calculates the price with tax for each product object

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 1 }], tax = 0.1

// Output: [{ name: 'Book', price: 22 }, { name: 'Pen', price: 1.1 }]

function priceWithTax(object, tax) {
    const calculate = object.map((obj) => {
        return obj.price * (1 + tax);
    });
    return calculate;
}

const result5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 1 }
];

const tax = 0.1;

console.log(priceWithTax(result5, tax));
