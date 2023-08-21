// Problem 1
// Create a function that checks if all objects have a specific property

// Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'

// Output: true

function checksWithSpecificPro(objects) {
    return objects.every((obj) => obj.name !== undefined);
}

const input1 = [{ name: "Alice" }, { name: "Bob" }];

const property = "name";

console.log(checksWithSpecificPro(input1, property));

// Create a function that checks if all elements in a matrix are positive

// Input: [[1, 2], [3, 4]]

// Output: true

function checkPositive(object) {
    return object.every((obj) => obj.every((nums) => nums > 0));
}

const input2 = [
    [1, 2],
    [3, 4]
];

console.log(checkPositive(input2));

// Create a function that checks if all sub-arrays have a specific length

// // Input: [[1, 2], [3, 4]], length = 2

// // Output: true

function checksByLength(array, length) {
    return array.every((arr) => arr.length !== undefined);
}

const input3 = [
    [1, 2],
    [3, 4, 5]
];

const length = 2;

console.log(checksByLength(input3, length));

// Create a function that checks if all dates in an array of objects are before a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'

// Output: true

function checksDates(objects, dates) {
    return objects.every((obj) => obj > dates);
}

const input4 = [
    { date: "2023-01-01" },
    { date: "2023-01-02" },
    { date: "2023-03-02" }
];

const dates = "2023-01-03";

console.log(checksDates(input4, dates));

// Create a function that checks if all products have a price greater than a specific value

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10

// Output: true

function checksPrice(products, value) {
    return products.every((obj) => obj.price > value);
}

const input5 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];

const value = 10;

console.log(checksPrice(input5, value));
