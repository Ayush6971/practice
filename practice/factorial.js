function iterativeApproach(number) {
    if (number < 0) return 'Invalid number'
    if (number === 0) return 1;
    let factorial = number;
    while (number-- > 2) {
        factorial = factorial * number
    }
    return factorial;
}


function recursiveApproach(number) {
    if (number < 0) return 'Invalid number'
    if (number === 0) return 1;
    let factorial = number * recursiveApproach(number - 1);
    return factorial;
}

console.log(iterativeApproach(5));
console.log(recursiveApproach(5));