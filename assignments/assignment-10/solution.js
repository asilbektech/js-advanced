// Create a function that filters objects with a specific property value

// Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'

// Output: [{ type: 'fruit', name: 'apple' }]

function filterObjWithPropValue(object, typ) {
    return object.filter((obj) => obj.type === typ);
}

const input1 = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];

const type = "fruit";

console.log(filterObjWithPropValue(input1, type));

// Create a function that filters all sub-arrays with a specific length

// Input: [[1, 2], [3, 4, 5]], length = 2

// Output: [[1, 2]]

function filterByLength(array, length) {
    return array.filter((arr) => arr.length === length);
}

const input2 = [
    [1, 2],
    [3, 4, 5]
];

const length = 2;

console.log(filterByLength(input2, length));

// Create a function that filters products with a price within a specific range

// Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20

// Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }]

function filterWithPriceRange(product, min, max) {
    return product.filter((pro) => pro.price >= min && pro.price <= max);
}

const input3 = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 },
    { name: "Penn", price: 13 },
    { name: "Pencil", price: 17 },
    { name: "backpack", price: 19 },
    { name: "backpack2", price: 25 }
];

const min = 15;
const max = 20;

console.log(filterWithPriceRange(input3, min, max));

// Create a function that filters words that start with a specific letter from an array of objects

// Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'

// Output: [{ word: 'cat' }]

function filterWithLetter(objects, letter) {
    return objects.filter((obj) => obj.word.startsWith(letter));
}

const input4 = [{ word: "cat" }, { word: "dog" }];

const letter = "c";

console.log(filterWithLetter(input4, letter));

// Create a function that filters dates before a specific date from an array of objects

// Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'

// Output: [{ date: '2023-01-01' }]

function filterDates(objects, dates) {
    return objects.filter((obj) => obj.date < dates);
}

const input5 = [
    { date: "2023-01-01" },
    { date: "2023-01-02" },
    { date: "2023-03-02" }
];

const dates = "2023-01-02";

console.log(filterDates(input5, dates));
