// Convert to Arrow function

const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    return arr;
};

const counter = () => {
    let count = 0;
    const increment = () => {
        count++;
        return count;
    };
    return increment;
};

const sumOfSquares = (numbers) => {
    const square = (x) => {
        return x * x;
    };
    let sum = 0;
    for (let number of numbers) {
        sum += square(number);
    }
    return sum;
};

const mathOperations = (a, b) => {
    const add = () => {
        return a + b;
    };
    const multiply = () => {
        return a * b;
    };
    return { add: add, multiply: multiply };
};

const createMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};

const stringManipulation = (str, operation1, operation2) => {
    return operation2(operation1(str));
};

const computeAverage = (nums, callback) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return callback(sum / nums.length);
};
