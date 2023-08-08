// Problem-1

// Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.

// Problem-2

// Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

function hipsterfy(sentence) {
    let vowels = "aeiouAEIOU";
    let lastvowel = -1;

    for (let i = sentence.length - 1; i >= 0; i--) {
        if (vowels.includes(sentence[i])) {
            lastvowel = i;
            break;
        }
    }

    if (lastvowel != 1) {
        sentence = sentence.slice(0, lastvowel) + sentence.slice(lastvowel + 1);
    }
    return sentence;
}

console.log(hipsterfy("proper")); // propr
console.log(hipsterfy("proper tonic panther"));

// Problem-3

// Write the function countAdjacentSums(arr, n) which takes an array and a number n. It should count the number of times that two adjacent numbers in an array add up to n.

function countAdjacentSums(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}

console.log(countAdjacentSums([1, 5], 6)); // 2 // 1+5 = n (6) // 5+1 = 6

// Problem-4

//Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:

// str: A string of uppercase characters.
// searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])
// The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.
