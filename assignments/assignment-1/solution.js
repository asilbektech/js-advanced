// reverse(): This method returns a reversed version of the string.
// Example: "Hello".reverse() should return "olleH".
// Example: "world".reverse() should return "dlrow".

const string = "Hello";

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

console.log("Hello".reverse());
console.log("world".reverse());
// removeVowels(): This method removes all vowels from the string.
// Example: "Hello".removeVowels() should return "Hll".
// Example: "world".removeVowels() should return "wrld".

const string1 = "Hello";

String.prototype.removeVowels = function () {
    let vowels = "aeiou";
    let result = "";

    for (let i = 0; i < this.length; i++) {
        if (!vowels.includes(this[i])) {
            result += this[i];
        }
    }
    return result;
};

console.log("Hello".removeVowels());
console.log("world".removeVowels());

// countWords(): This method counts the number of words in a string.
// Example: "Hello World".countWords() should return 2.
// Example: "One word".countWords() should return 1.

const string2 = "Hello World";

String.prototype.countWords = function () {
    return this.split(" ").length;
};

console.log("Hello World".countWords());

// wrapInTags(tag): This method wraps the string in the given HTML tag.
// Example: "Hello".wrapInTags("b") should return "<b>Hello</b>".
// Example: "world".wrapInTags("i") should return "<i>world</i>".

const string3 = "Hello";

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

console.log("Hello".wrapInTags("b"));
// isPalindrome(): This method checks if the string is a palindrome (same forwards as backwards, ignoring case).
// Example: "racecar".isPalindrome() should return true.
// Example: "Hello".isPalindrome() should return false.
String.prototype.isPalindrome = function () {
    return (
        this.toLowerCase() === this.split("").reverse().join("").toLowerCase()
    );
};

console.log("racecar".isPalindrome());

// Number.prototype
// isPrime(): This method checks if the number is a prime number.
// Example: (7).isPrime() should return true.
// Example: (4).isPrime() should return false.
Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) return false;
    }
    return this > 1;
};

console.log((7).isPrime());

// toFactorial(): This method returns the factorial of the number.
// Example: (5).toFactorial() should return 120.
// Example: (3).toFactorial() should return 6.

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = 2; i <= this; i++) factorial *= i;
    return factorial;
};

console.log((5).toFactorial());

// findFactors(): This method returns an array of all factors of the number.
// Example: (10).findFactors() should return [1, 2, 5, 10].
// Example: (16).findFactors() should return [1, 2, 4, 8, 16].
Number.prototype.findFactors = function () {
    const factors = [];
    for (let i = 1; i <= this; i++) {
        if (this % i === 0) factors.push(i);
    }
    return factors;
};

console.log((10).findFactors());

// isPerfectSquare(): This method checks if the number is a perfect square.
// Example: (9).isPerfectSquare() should return true.
// Example: (8).isPerfectSquare() should return false.
Number.prototype.isPerfectSquare = function () {
    for (let i = 0; i <= this; i++) {
        if (i * i === this) return true;
    }
    return false;
};

console.log((9).isPerfectSquare());
// isOdd(): This method checks if a number is odd.
// Example: (5).isOdd() should return true.
// Example: (6).isOdd() should return false.

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

console.log((5).isOdd());
// Array.prototype
// findMax(): This method returns the maximum value in an array of numbers.
// Example: [1, 2, 3].findMax() should return 3.
// Example: [-1, -2, -3].findMax() should return -1.

Array.prototype.findMax = function () {
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > max) max = this[i];
    }
    return max;
};

console.log([1, 2, 3].findMax());

// findMin(): This method returns the minimum value in an array of numbers.
// Example: [1, 2, 3].findMin() should return 1.
// Example: [-1, -2, -3].findMin() should return -3.
Array.prototype.findMin = function () {
    let min = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] < min) min = this[i];
    }
    return min;
};

console.log([1, 2, 3].findMin());
// average(): This method returns the average of all the numbers in the array.
// Example: [1, 2, 3, 4].average() should return 2.5.
// Example: [5, 10, 15, 20].average() should return 12.5.

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) sum += this[i];
    return sum / this.length;
};

console.log([1, 2, 3, 4].average());

// removeDuplicates(): This method returns a new array with duplicates removed.
// Example: [1, 2, 2, 3].removeDuplicates() should return [1, 2, 3].
// Example: ["a", "b", "b", "c"].removeDuplicates() should return ["a", "b", "c"].

const arr = [1, 2, 2, 3];

Array.prototype.removeDublicates = function () {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

console.log([1, 2, 2, 3].removeDublicates());

// shuffle(): This method returns a new array with the order of the elements randomized.
// Example: [1, 2, 3].shuffle() could return [3, 1, 2].
// Example: ["a", "b", "c"].shuffle() could return ["c", "a", "b"].

Array.prototype.shuffle = function () {
    for (let i = 0; i < this.length; i++) {
        const j = Math.floor(Math.random() * this.length);
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

console.log([1, 2, 3, 4, 5].shuffle());
