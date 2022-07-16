function isPalindromeString(string) {
    const length = string.length;
    for (let i = 0; i <= length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return 'It is not a palindrome'
        }
        return 'It is a palindrome'
    }
}

function isPalindromeNumber(number) {
    const reverse = number.toString(10).split("").reverse().join("");
    if (number == reverse) return 'It is a palindrome'
    else return 'It is not a palindrome';
}



console.log(isPalindromeString('ABCBA'))
console.log(isPalindromeNumber(12321))