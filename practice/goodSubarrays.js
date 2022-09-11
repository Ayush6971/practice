function goodSubarrays(A, B) {
    let N = A.length, finalLength = 0;
    for (let i = 0; i < N; i++) {
        let count = 0, sum = 0;;
        for (let j = i; j < N; j++) {
            count++
            sum = sum + A[j];
            if (count % 2 == 0 && sum < B) finalLength++
            else if (count % 2 != 0 && sum > B) finalLength++
        }
    }
    return finalLength;
}

console.log(goodSubarrays([1, 2, 3, 4, 5], 4))