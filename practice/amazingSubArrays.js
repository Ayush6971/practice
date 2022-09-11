function isVowel(x) {
    return (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'
        || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
};

function solve(A) {
    let N = A.length, count = 0;
    console.log("🚀 ~ file: amazingSubArrays.js ~ line 8 ~ solve ~ N", N)
    for (let i = 0; i < N; i++) {
        if (isVowel(A[i]) == true) count += N - i
    }
    return count % 10003;
}

console.log('==>', solve("pGpEusuCSWEaPOJmamlFAnIBgAJGtcJaMPFTLfUfkQKXeymydQsdWCTyEFjFgbSmknAmKYFHopWceEyCSumTyAFwhrLqQXbWnXSn"))