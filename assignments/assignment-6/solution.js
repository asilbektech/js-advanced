function filterOddNumbers(num) {
    let oddNumbers = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            oddNumbers.push(num[i]);
        }
    }
    return oddNumbers;
}

function filterDivisibleByThree(num) {
    let divisible = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 3 === 0) {
            divisible.push(num[i]);
        }
    }
    return divisible;
}

function filterPrimeNumbers(num) {
    const primes = [];
    let i = 0;
    while (i < num.length) {
        if (isPrimeNumber(num[i])) {
            primes.push(num[i]);
        }
        i++;
    }
    return odds;
}

function isPrimeNumber(num) {
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}
