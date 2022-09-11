function alternatingSubarrays(A, B) {
    let N = A.length, result = [];
    for (let i = 0; i < N - (2 * B + 1) + 1; i++) {
        let start = i, end = 2 * B + i, flag = 0;
        for (let j = start; j < end; j++) {
            if (A[j] == A[j + 1]) flag = 1;
        }
        if (flag == 0) result.push(i + B)
    }
    return result;
}
console.log(alternatingSubarrays([1, 0, 1, 0, 1], 1))