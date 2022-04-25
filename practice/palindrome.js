function checkPalindrome(string){
    const length = string.length;
    for(let i=0; i<=length/2;i++){
        if(string[i] !== string[length-1-i]){
            return 'It is not a palindrome'
        }
        return 'It is a palindrome'
    }
}

console.log(checkPalindrome('ABCBA'))