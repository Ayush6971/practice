function checkPrime(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) count++
    }
    if (count === 2) return true;
    else return false;
}
console.log(checkPrime(1))

function optimalCheckPrime(number) {
    let count = 0;
    for (let i = 1; i * i <= number; i++) {
        if (number % i === 0) {
            if (i === number / i) count++
            else count = count + 2
        }
    }
    if (count === 2) return true;
    else return false;
}

console.log(optimalCheckPrime(1))