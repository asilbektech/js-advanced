// Create a function that checks if any object in an array contains a null value

// Input: [{ value: 3 }, { value: null }]

// Output: true

const checkNullValue = (object) => object.some((obj) => obj.value === null);

const result1 = [{ value: 3 }, { value: null }];

console.log(checkNullValue(result1));

// Create a function that checks if any element in a matrix is a specific value

// Input: [[1, 2], [3, 4]], value = 4

// Output: true

const checkSpecificValue = (matrix, value) =>
    matrix.some((obj) => obj.includes(value));

const input2 = [
    [1, 2],
    [3, 4]
];

const value = 4;

console.log(checkSpecificValue(input2, value));

// Create a function that checks if any object in an array has a property with a specific length

// Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8

// Output: true

const checksByLength = (obj, length) =>
    obj.some((obj) => obj.word.length === length);

const input3 = [{ word: "cat" }, { word: "elephant" }];

const length = 8;

console.log(checksByLength(input3, length));

// Create a function that checks if any sub-array contains a specific number

// Input: [[1, 2], [3, 4, 5]], number = 5

// Output: true

const checksSpecificNum = (array, num) =>
    array.some((arr) => arr.includes(num));

const input4 = [
    [1, 2],
    [3, 4, 5]
];

const num = 5;

console.log(checksSpecificNum(input4, num));

// Create a function that checks if any date in an array of objects is after a specific date

// Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'

// Output: true

const checksDate = (objects, date) => objects.some((obj) => obj.date > date);

const input5 = [{ date: "2023-01-01" }, { date: "2023-01-04" }];

const date = "2023-01-02";

console.log(checksDate(input5, date));
